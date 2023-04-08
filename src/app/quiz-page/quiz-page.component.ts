import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, QuestionWithResult, Quiz } from '../services/interfaces';
import { MenuService } from '../services/menu.service';
import { SourceService } from '../services/source.service';
import { castExists } from '../utils';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  quiz!: Quiz;
  questoinsWithResults!: Question[];
  questionIndex = 0;
  shouldShowCorrectAnswer = true;
  showResult = false;

  constructor(
    private readonly sourceService: SourceService,
    private readonly scoreService: ScoreService,
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {
    let courseId = castExists(
      this.route.snapshot.queryParams['courseId'],
      'course id is not set'
    );
    let quizId = castExists(
      this.route.snapshot.queryParams['quizId'],
      'quiz id is not set'
    );
    this.quiz = castExists(
      this.sourceService.getQuiz(courseId, quizId),
      'quizId does not exist in course with courseId'
    )!;

    this.resetQuiz();
  }

  ngOnInit() {}

  resetQuiz() {
    this.questionIndex = 0;
    this.questoinsWithResults = this.shuffleQuestions();
    this.menuService.closeMenu();
  }

  onToogleChange(value) {
    this.shouldShowCorrectAnswer = value;
  }

  selectOption({ value }) {
    this.questoinsWithResults[this.questionIndex].selectedValue = value;

    if (this.shouldShowCorrectAnswer) {
      this.showResult = true;
      return;
    }

    this.nextQuestion();
  }

  nextQuestion() {
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
