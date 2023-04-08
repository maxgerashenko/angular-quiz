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
  @ViewChild(MatSelectionList) listToFocus!: MatSelectionList;

  @Input() set question(question: Question) {
    this._question = question;
    setTimeout(() => {
      this.resetListFocus();
    }, 100);
    this.voiceOver(question.title);
  }
  @Input() currentQuestionIndex!: number;

  @Output() optionSelected = new EventEmitter<{
    value: string;
    deselect: () => void;
  }>();
  @Output() toogleChange = new EventEmitter<boolean>();
  get questionIndex(): number {
    return this.currentQuestionIndex + 1;
  }

  _question!: Question;
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
    assert(
      this.listToFocus,
      'QuestionComponent.list does not exist on the page'
    );
    this.resetListFocus();
  }

  private voiceOver(text: string) {
    this.voiceService.voiceOver(text);
  }

  private resetListFocus() {
    this.listToFocus._items.first._elementRef.nativeElement.focus();
  }

  onToggleChange(value: boolean) {
    this.toogleChange.emit(value);
    this.resetListFocus();
  }

  selectOption(event: MatSelectionListChange): void {
    debugger;
    const selectedValue = event.source.selectedOptions.selected.map(
      ({ value }) => value
    )[0];
    this.optionSelected.emit({
      value: selectedValue,
      deselect: () => {
        this.listToFocus.deselectAll();
        this.resetListFocus();
      },
    });
    this.listToFocus.deselectAll();
  }
}
