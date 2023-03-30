import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Question, Quiz } from '../services/quiz.service';

@Component({
  selector: 'quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss'],
})
export class QuizResultsComponent {
  @Input() quiz: Quiz;
  @Input() answers: string[] = ['a', 'a'];
  @Input() numCorrect: number;
  @Output() reset = new EventEmitter<undefined>();

  buttonColor: 'primary' | 'accent';
  score: number;
  total: number;
  message: string;
  questions: Question[] = [
    { text: '11111111', answer: 'a', options: ['a', 'b', 'c', 'd'] },
    { text: '22222222', answer: 'a', options: ['a', 'b', 'c', 'd'] },
    { text: '33333333', answer: 'a', options: ['a', 'b', 'c', 'd'] },
    { text: '44444444', answer: 'a', options: ['a', 'b', 'c', 'd'] },
    { text: '55555555', answer: 'a', options: ['a', 'b', 'c', 'd'] },
    { text: '66666666', answer: 'a', options: ['a', 'b', 'c', 'd'] },
    { text: '11111111', answer: 'a', options: ['a', 'b', 'c', 'd'] },
    { text: '22222222', answer: 'a', options: ['a', 'b', 'c', 'd'] },
    { text: '33333333', answer: 'a', options: ['a', 'b', 'c', 'd'] },
    { text: '44444444', answer: 'a', options: ['a', 'b', 'c', 'd'] },
  ];
  appstate: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.appstate = this.route.paramMap.pipe(
      map(() => window.history.state.productdetails.queryParams)
    );
    const data = this.route.data;
    console.log(data);
    this.quiz = {
      id: '1',
      title: 'this title',
      questions: [...this.questions],
    };
    this.numCorrect = 9;
    this.total = this.quiz.questions.length;
    this.score = (this.numCorrect / this.total) * 100;
    this.message = this.getFeedbackMessage();
    this.buttonColor = this.score >= 80 ? 'primary' : 'accent';
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
