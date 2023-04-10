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
  }

  isCorrect(optionLetter: string): boolean {
    return (
      (this.question.selectedValue === optionLetter &&
        this.question.selectedValue === this.getAnswer()) ||
      optionLetter === this.getAnswer()
    );
  }

  isInCorrect(optionLetter: string): boolean {
    return (
      optionLetter === this.question.selectedValue &&
      this.getAnswer() !== this.question.selectedValue
    );
  }

  isRelevant(optionLetter: string): boolean {
    return (
      optionLetter === this.question.selectedValue ||
      optionLetter === this.getAnswer()
    );
  }

  private getAnswer() {
    return this.question.answer.toLocaleLowerCase();
  }

  ngOnDestroy() {
    this.voiceService.stop();
  }
}
