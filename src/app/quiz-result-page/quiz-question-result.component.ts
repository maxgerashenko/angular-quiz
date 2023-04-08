import { Component, Input, OnInit } from '@angular/core';
import { sortedQuestion } from './quiz-result-page.component';

@Component({
  selector: 'app-quiz-question-result',
  templateUrl: './quiz-question-result.component.html',
  styleUrls: ['./quiz-question-result.component.css'],
})
export class QuizQuestionResultComponent {
  @Input() question!: sortedQuestion;
  @Input() selectedAnswer!: string;

  isCorrect(optionLetter: string): boolean {
    return (
      (this.selectedAnswer === optionLetter &&
        this.selectedAnswer === this.question.answer) ||
      optionLetter === this.question.answer
    );
  }

  isInCorrect(optionLetter: string): boolean {
    return (
      this.selectedAnswer === optionLetter &&
      this.selectedAnswer !== this.question.answer
    );
  }

  isRelevant(question: sortedQuestion, optionLetter: string): boolean {
    return (
      optionLetter === question.selected || optionLetter === question.answer
    );
  }
}
