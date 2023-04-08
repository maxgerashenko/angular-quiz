import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuestionWithResult } from '../services/interfaces';
import { VoiceService } from '../services/voice.service';

@Component({
  selector: 'app-quiz-question-result',
  templateUrl: './quiz-question-result.component.html',
  styleUrls: ['./quiz-question-result.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizQuestionResultComponent {
  @Input() question!: QuestionWithResult;
  @Input() alwaysShowDescription?: QuestionWithResult;

  constructor(private voiceService: VoiceService) {}

  ngOnInit() {
    if (this.question.description) {
      this.voiceService.voiceOver(this.question.description);
    }
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

  ngOnDestroy() {
    this.voiceService.stop();
  }
}
