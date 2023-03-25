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
import { MatSelect } from '@angular/material/select';
import { AlphabetLetterPipe } from '../pipes/letter.pipe';
import { Question } from '../services/quiz.service';

@Component({
  selector: 'quiz-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuizQuestionComponent {
  @Input() question: Question;
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
  checked = false;

  constructor(readonly alphabetLetter: AlphabetLetterPipe) {}

  onToggleChange(value: boolean) {
    this.checked = value;
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
      },
    });

    if (this.checked) this.list.deselectAll();
  }
}
