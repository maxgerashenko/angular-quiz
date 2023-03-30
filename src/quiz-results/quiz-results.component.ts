import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import {
  Question,
  Quiz,
  QuizResult,
  QuizService,
} from '../services/quiz.service';

@Component({
  selector: 'quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss'],
})
export class QuizResultsComponent {
  buttonColor: 'primary' | 'accent';
  score: number;
  total: number;
  message: string;
  answers: string[];
  quiz: Quiz;
  numCorrect: number;

  constructor(private router: Router, private quizService: QuizService) {
    this.flatResults(this.quizService.getResult());
    this.numCorrect = this.quiz.questions.reduce((pre, { answer }, index) => {
      return answer === this.answers[index] ? pre + 1 : pre;
    }, 0);
    this.score = (this.numCorrect / this.total) * 100;
    this.message = this.getFeedbackMessage();
    this.buttonColor = this.score >= 80 ? 'primary' : 'accent';
  }

  flatResults({ quiz, answers }: QuizResult) {
    this.quiz = quiz;
    this.answers = answers;
    this.total = quiz.questions.length;
  }

  ngOnInit() {}

  reset() {
    this.router.navigate(['/quiz'], {
      queryParams: { id: this.quiz.id },
    });
  }

  getFeedbackMessage(): string {
    if (this.score >= 0.8) {
      return 'Great job!';
    } else if (this.score >= 0.5) {
      return 'Not bad, but you could do better.';
    } else {
      return 'Better luck next time!';
    }
  }
}
