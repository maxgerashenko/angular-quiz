import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFocusDirective } from './auto-focus.directive';
import { FocusRemover } from './remove-focus.directive';
import { AutofocusOnEnableDirective } from './autofocus-on-enable.directive';

const directives = [
  AutoFocusDirective,
  FocusRemover,
  AutofocusOnEnableDirective,
];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule],
  exports: [...directives],
})
export class DirectivesModule {}
