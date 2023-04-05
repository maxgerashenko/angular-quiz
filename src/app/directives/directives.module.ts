import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFocusDirective } from './auto-focus.directive';
import { FocusRemover } from './remove-focus.directive';

@NgModule({
  declarations: [AutoFocusDirective, FocusRemover],
  imports: [CommonModule],
  exports: [FocusRemover, AutoFocusDirective],
})
export class DirectivesModule {}
