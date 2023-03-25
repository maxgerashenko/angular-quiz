import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlphabetIndexPipe } from '../pipes/alphabet-index.pipe';
import { AlphabetLetterPipe } from '../pipes/letter.pipe';
import { Question, Quiz } from '../services/quiz.service';

@Component({
  selector: 'quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.css'],
})
export class QuizResultsComponent {
  @Input() quiz: Quiz;
  @Input() answers: string[];
  @Input() numCorrect: number;
  @Output() reset = new EventEmitter<undefined>();

  score: number;
  total: number;
  message: string;
  questions: Question[];

  ngOnInit() {
    this.total = this.quiz.questions.length;
    this.message = this.getFeedbackMessage();
    this.score = this.numCorrect / this.total;
  }

  getFeedbackMessage(): string {
    const percentCorrect = this.score / this.total;
    if (percentCorrect >= 0.8) {
      return 'Great job!';
    } else if (percentCorrect >= 0.5) {
      return 'Not bad, but you could do better.';
    } else {
      return 'Better luck next time!';
    }
  }
}
