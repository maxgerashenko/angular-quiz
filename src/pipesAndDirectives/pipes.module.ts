import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetLetterPipe } from './letter.pipe';
import { AlphabetIndexPipe } from './alphabet-index.pipe';
import { ArrayPipe } from './array.pipe';
import { AutoFocus } from '../pipesAndDirectives/autofocus.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AlphabetLetterPipe, AlphabetIndexPipe, ArrayPipe, AutoFocus],
  providers: [AlphabetLetterPipe, AlphabetIndexPipe, ArrayPipe],
  exports: [AlphabetLetterPipe, AlphabetIndexPipe, ArrayPipe, AutoFocus],
})
export class PipesModule {}
