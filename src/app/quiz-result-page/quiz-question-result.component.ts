import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { QuestionWithResult } from '../services/interfaces';
import { VoiceService } from '../services/voice.service';

@Component({
  selector: 'app-quiz-question-result',
  templateUrl: './quiz-question-result.component.html',
  styleUrls: ['./quiz-question-result.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizQuestionResultComponent {
  @ViewChild('description') description;

  @Input() question!: QuestionWithResult;
  @Input() alwaysShowDescription?: QuestionWithResult;
  @Input() isSingle = false;

  inIncorrect = false;

  constructor(private voiceService: VoiceService) {}

  ngOnInit() {
    this.inIncorrect = this.question.answer !== this.question.selectedValue;
    if (this.isSingle && this.question.description && this.inIncorrect) {
      this.voiceService.readResults(this.question.description);
    }
    this.question = [this.question].map((question: QuestionWithResult) => ({
      ...question,
      selectedValue: question.selectedValue.toLocaleLowerCase(),
      answer: question.answer.toLocaleLowerCase(),
    }))[0];
  }

  isCorrect(optionLetter: string): boolean {
    return (
      (this.question.selectedValue === optionLetter.toLocaleLowerCase() &&
        this.question.selectedValue === this.question.answer) ||
      optionLetter.toLocaleLowerCase() === this.question.answer
    );
  }

  isInCorrect(optionLetter: string): boolean {
    return (
      optionLetter.toLocaleLowerCase() === this.question.selectedValue &&
      this.question.answer !== this.question.selectedValue
    );
  }

  isRelevant(optionLetter: string): boolean {
    return (
      optionLetter.toLocaleLowerCase() === this.question.selectedValue ||
      optionLetter.toLocaleLowerCase() === this.question.answer
    );
  }

  ngOnDestroy() {
    this.voiceService.stop();
  }
}
