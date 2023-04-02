import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { AlphabetLetterPipe } from '../pipesAndDirectives/letter.pipe';
import { Question } from '../services/data.service.types';
import { VoiceService } from '../services/voice.service';

@Component({
  selector: 'quiz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuizQuestionComponent {
  @Input() set question(question: Question) {
    this._question = question;
    setTimeout(() => {
      this.resetFocus();
    }, 100);
    this.voiceOver(question.title);
  }
  @Input() currentQuestionIndex: number;
  @Input() selectedOptionValue: string;
  @Output() optionSelected = new EventEmitter<{
    value: string;
    deselect: () => void;
  }>();
  @Output() toogleChange = new EventEmitter<boolean>();
  @ViewChild(MatSelectionList) list;
  get questionIndex(): number {
    return this.currentQuestionIndex + 1;
  }
  _question: Question;
  isAutoReply = true;

  constructor(
    readonly alphabetLetter: AlphabetLetterPipe,
    private voiceService: VoiceService
  ) {}

  ngAfterViewInit() {
    this.resetFocus();
  }

  private voiceOver(text: string) {
    this.voiceService.voiceOver(text);
  }

  private resetFocus() {
    this.list._items.first._elementRef.nativeElement.focus();
  }

  onToggleChange(value: boolean) {
    this.isAutoReply = value;
    this.toogleChange.emit(value);
    this.list.deselectAll();
  }

  selectOption(event): void {
    const selectedValue = event.source.selectedOptions.selected.map(
      ({ value }) => value
    )[0];
    this.optionSelected.emit({
      value: selectedValue,
      deselect: () => {
        this.list.deselectAll();
        this.resetFocus();
      },
    });
    if (this.isAutoReply) this.list.deselectAll();
  }
}
