import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, QuestionWithResult, Quiz } from '../services/interfaces';
import { MenuService } from '../services/menu.service';
import { SourceService } from '../services/source.service';
import { assert, castExists } from '../utils';
import { ScoreService } from '../services/score.service';
import { SettingsService } from '../services/settings.service';
import { MatSelectionList } from '@angular/material/list';
import { QuestionOptionsComponent } from './question-options.component';

const questionWithResultGuard = (
  question: Question | QuestionWithResult
): QuestionWithResult => {
  if ((question as QuestionWithResult).selectedValue == null) return;
  return question as QuestionWithResult;
};

@Component({
  selector: 'quiz',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizPageComponent {
  @ViewChild(QuestionOptionsComponent) optionsList!: QuestionOptionsComponent;

  questionWithResultGuard = questionWithResultGuard;
  isResultSet = false;
  courseId = castExists(
    this.route.snapshot.queryParams['courseId'],
    'course id is not set'
  );
  quizId = castExists(
    this.route.snapshot.queryParams['quizId'],
    'quiz id is not set'
  );
  quiz = castExists(
    this.sourceService.getQuiz(this.courseId, this.quizId),
    'quizId does not exist in course with courseId'
  )!;
  questoinsWithResults!: (Question | QuestionWithResult)[];
  questionIndex = 0;
  isLocalResultOn = this.settingsService.getResulstSettings().isLocalResultOn;

  constructor(
    private readonly sourceService: SourceService,
    private readonly scoreService: ScoreService,
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService,
    private settingsService: SettingsService
  ) {
    this.resetQuiz();
  }

  resetQuiz() {
    this.isResultSet = false;
    this.questionIndex = 0;
    this.questoinsWithResults = this.shuffleQuestions();
    this.menuService.closeMenu();
  }

  onToogleChange(isLocalResultOn) {
    this.isLocalResultOn = isLocalResultOn;
    this.settingsService.setResulstSettings({ isLocalResultOn });
    this.optionsList.resetFocus();
  }

  onSelectOption(value) {
    this.questoinsWithResults[this.questionIndex].selectedValue = value;
    const question = this.questoinsWithResults[this.questionIndex];
    const isCorrect = question.selectedValue === question.answer;
    this.isResultSet = true;
    if (this.isLocalResultOn && !isCorrect) return; // bailout;

    this.nextQuestion();
  }

  nextQuestion() {
    this.isResultSet = false;
    this.questionIndex++;
    if (this.questionIndex < this.questoinsWithResults.length) return;

    this.scoreService.setResult(
      this.questoinsWithResults as unknown as QuestionWithResult[],
      this.quiz.title,
      this.quiz.courseId,
      this.quiz.id
    );
    this.router.navigate(['/results']);
  }

  goToList() {
    if (this.sourceService.isLastQuiz(this.quiz.courseId, this.quiz.id)) {
      this.router.navigate(['/start']);
      return;
    }

    this.router.navigate(['/course'], {
      queryParams: { id: this.quiz.courseId },
    });
  }

  private shuffleQuestions() {
    const questions = [...this.quiz.questionsList];
    const half = Math.round(questions.length / 2);
    const lastIndex = questions.length - 1;
    for (let i = lastIndex; i >= half; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  }
}
