import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { QuizQuestionComponent } from '../question/question.component';
import { Quiz, QuizService } from '../services/quiz.service';
import { rpcQuiz } from '../services/rpcQuiz';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  @ViewChild(QuizQuestionComponent) questions: QuizQuestionComponent;

  quiz = rpcQuiz as Quiz;
  answers: string[] = [];
  numCorrect = 0;
  currentQuestionIndex = 0;
  selectedOptionValue: string;
  isAutoReply = false;

  constructor(private readonly quizService: QuizService) {}

  ngOnInit(): void {
    this.shuffleQuestions();
  }

  shuffleQuestions(): void {
    for (let i = this.quiz.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.quiz.questions[i], this.quiz.questions[j]] = [
        this.quiz.questions[j],
        this.quiz.questions[i],
      ];
    }
  }

  toogleAutoReply(value) {
    this.isAutoReply = value;
  }

  selectOption({ value, deselect }): void {
    this.answers[this.currentQuestionIndex] = value;
    this.selectedOptionValue = value;
    if (this.isAutoReply) this.submitAnswer();
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedOptionValue = null;
    this.shuffleQuestions();
  }

  submitAnswer(): void {
    this.questions.list.deselectAll();
    this.currentQuestionIndex++;
  }
}
