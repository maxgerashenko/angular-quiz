import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  MatSelectionList,
  MatSelectionListChange,
} from '@angular/material/list';
import { IndexLetterPipe } from '../pipes/index-letter.pipe';

@Component({
  selector: 'question-options',
  templateUrl: './question-options.component.html',
  styleUrls: ['./question-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionOptionsComponent {
  @ViewChild(MatSelectionList) listToFocus!: MatSelectionList;

  @Input() options: string[] = [];
  @Input() isToggleEnabled: boolean = false;
  @Output() optionSelected = new EventEmitter<string>();

  constructor(readonly indexLetter: IndexLetterPipe) {}

  ngAfterViewInit() {
    this.resetFocus();
  }

  onSelectionChange(event: MatSelectionListChange): void {
    const selectedValue = event.source.selectedOptions.selected.map(
      ({ value }) => value
    )[0];
    this.optionSelected.emit(selectedValue);
    event.source.deselectAll();
  }

  resetFocus() {
    this.listToFocus._items.first._elementRef.nativeElement.focus();
  }
}
