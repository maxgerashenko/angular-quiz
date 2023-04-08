import { Component, Input } from '@angular/core';
import { QuestionWithResult } from '../services/interfaces';

@Component({
  selector: 'app-quiz-question-result',
  templateUrl: './quiz-question-result.component.html',
  styleUrls: ['./quiz-question-result.component.css'],
})
export class QuizQuestionResultComponent {
  @Input() question!: QuestionWithResult;
  @Input() alwaysShowDescription?: QuestionWithResult;

  constructor() {}

  ngOnInit() {
    debugger;
  }

  isCorrect(optionLetter: string): boolean {
    return (
      (this.question.selectedValue === optionLetter &&
        this.question.selectedValue === this.question.answer) ||
      optionLetter === this.question.answer
    );
  }

  isInCorrect(optionLetter: string): boolean {
    return (
      optionLetter === this.question.selectedValue &&
      this.question.answer !== this.question.selectedValue
    );
  }

  isRelevant(optionLetter: string): boolean {
    return (
      optionLetter === this.question.selectedValue ||
      optionLetter === this.question.answer
    );
  }
}
