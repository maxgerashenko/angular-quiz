import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexLetterPipe } from './index-letter.pipe';
import { LetterIndexPipe } from './letter-index.pipe';
import { ArrayPipe } from './array.pipe';
import { inCorrectFirstPipe } from './in-correct-first.pipe';

const pipes = [IndexLetterPipe, LetterIndexPipe, ArrayPipe, inCorrectFirstPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [...pipes],
  providers: [...pipes],
  exports: [...pipes],
})
export class PipesModule {}
