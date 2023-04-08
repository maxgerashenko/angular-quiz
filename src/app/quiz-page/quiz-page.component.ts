import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../services/interfaces';
import { MenuService } from '../services/menu.service';
import { SourceService } from '../services/source.service';
import { ObjectType, castExists } from '../utils';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent implements OnInit {
  quiz!: Quiz;
  answers: string[] = [];
  currentQuestionIndex = 0;
  shouldShowCorrectAnswer = true;

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
    this.shuffleQuestions();
    this.menuService.closeMenu();
  }

  ngOnInit() {}

  private shuffleQuestions() {
    for (let i = this.quiz.questionsList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.quiz.questionsList[i], this.quiz.questionsList[j]] = [
        this.quiz.questionsList[j],
        this.quiz.questionsList[i],
      ];
    }
  }

  onToogleChange(value) {
    this.shouldShowCorrectAnswer = value;
  }

  selectOption({ value }) {
    this.answers[this.currentQuestionIndex] = value;
    this.submitAnswer();
  }

  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.shuffleQuestions();
  }

  goToList() {
    this.router.navigate(['/course'], {
      queryParams: { id: this.quiz.courseId },
    });
  }

  submitAnswer() {
    debugger;
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex >= this.quiz.questionsList.length) {
      this.scoreService.setResult({
        quiz: this.quiz,
        answers: this.answers,
      });
      this.router.navigate(['/results']);
    }
  }
}
