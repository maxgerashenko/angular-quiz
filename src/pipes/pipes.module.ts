import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetLetterPipe } from './letter.pipe';
import { AlphabetIndexPipe } from './alphabet-index.pipe';
import { ArrayPipe } from './array.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AlphabetLetterPipe, AlphabetIndexPipe, ArrayPipe],
  providers: [AlphabetLetterPipe, AlphabetIndexPipe, ArrayPipe],
  exports: [AlphabetLetterPipe, AlphabetIndexPipe, ArrayPipe],
})
export class PipesModule {}
