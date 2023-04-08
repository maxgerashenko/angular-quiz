import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MatSelectionList,
  MatSelectionListChange,
} from '@angular/material/list';
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
  @Output() optionSelected = new EventEmitter<{
    value: string;
    deselect: () => void;
  }>();
  @Output() toggleChange = new EventEmitter<boolean>();
  @ViewChild(MatSelectionList) list!: MatSelectionList;
  get questionIndex(): number {
    return this.currentQuestionIndex + 1;
  }

  isToggleEnabled = true;

  constructor(
    readonly indexLetter: IndexLetterPipe,
    private voiceService: VoiceService
  ) {}

  ngOnInit() {
    assert(
      this.currentQuestionIndex,
      'QuestionComponent.currentQuestionIndex is not set'
    );
    assert(this._question, 'QuestionComponent.question is not set');
  }

  ngAfterViewInit() {
    assert(this.list, 'QuestionComponent.list does not exist on the page');
    this.resetFocus();
  }

  private voiceOver(text: string) {
    this.voiceService.voiceOver(text);
  }

  private resetFocus() {
    this.list._items.first._elementRef.nativeElement.focus();
  }

  onToggleChange(value: boolean) {
    this.isToggleEnabled = value;
    this.toggleChange.emit(value);
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
  }
}
