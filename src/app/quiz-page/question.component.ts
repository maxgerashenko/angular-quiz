import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { IndexLetterPipe } from '../pipes/index-letter.pipe';
import { Question } from '../services/interfaces';
import { VoiceService } from '../services/voice.service';
import { assert } from '../utils';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  _question!: Question;
  @Input() set question(question: Question) {
    this._question = question;
    setTimeout(() => {
      this.resetFocus();
    }, 100);
    this.voiceOver(question.title);
  }
  @Input() currentQuestionIndex!: number;
  @Input() selectedOptionValue!: string;
  @Output() optionSelected = new EventEmitter<{
    value: string;
    deselect: () => void;
  }>();
  @Output() toogleChange = new EventEmitter<boolean>();
  @ViewChild(MatSelectionList) list!: MatSelectionList;
  get questionIndex(): number {
    return this.currentQuestionIndex + 1;
  }
  
  isAutoReply = true;

  constructor(
    readonly indexLetter: IndexLetterPipe,
    private voiceService: VoiceService
  ) {}

  ngOnInit() { 
    assert(this.currentQuestionIndex, 'currentQuestionIndex is not set');
    assert(this.selectedOptionValue, 'selectedOptionValue is not set');
    assert(this.question, '_question is not set');
    assert(this.list, 'list does not exist on the page');

  }

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

  selectOption(event: MatSelectionListChange): void {
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
