import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetLetterPipe } from './letter.pipe';
import { ArrayPipe } from './array.pipe';
import { AutoFocus } from '../pipesAndDirectives/autofocus.directive';
import { correctFirstPipe } from '../pipesAndDirectives/order-by-correct.pipe';
import { IndexLetterPipe } from 'src/pipesAndDirectives/index-letter.pipe';

const pipes = [
  AlphabetLetterPipe,
  LetterIndexPipe,
  IndexLetterPipe,
  ArrayPipe,
  CorrectFirstPipe,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...pipes, AutoFocus],
  providers: [...pipes],
  exports: [...pipes, AutoFocus],
})
export class PipesModule {}
