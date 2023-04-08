import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IndexLetterPipe } from '../pipes/index-letter.pipe';
import { Question } from '../services/interfaces';
import { VoiceService } from '../services/voice.service';
import { assert } from '../utils';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {
  @Output() toogleChange = new EventEmitter<boolean>();
  @Input() isToggleEnabled;
  @Input() currentQuestionIndex!: number;
  @Input() question: Question;

  constructor(
    readonly indexLetter: IndexLetterPipe,
    private voiceService: VoiceService
  ) {}

  ngOnInit() {
    assert(
      this.currentQuestionIndex,
      'QuestionComponent.currentQuestionIndex is not set'
    );
    assert(this.question, 'QuestionComponent.question is not set');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question) {
      debugger;
      this.voiceService.readTitle(this.question.title);
    }
  }

  onToggleChange(isToggleEnabled: boolean) {
    this.toogleChange.emit(isToggleEnabled);
  }
}
