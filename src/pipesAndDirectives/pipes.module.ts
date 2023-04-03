import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetLetterPipe } from './letter.pipe';
import { AlphabetIndexPipe } from './alphabet-index.pipe';
import { ArrayPipe } from './array.pipe';
import { AutoFocus } from '../pipesAndDirectives/autofocus.directive';
import { correctFirstPipe } from '../pipesAndDirectives/order-by-correct.pipe';

const pipes = [
  AlphabetLetterPipe,
  letterIndexPipe,
  ArrayPipe,
  correctFirstPipe,
];

@NgModule({
  imports: [CommonModule],
  declarations: [...pipes, AutoFocus],
  providers: [...pipes],
  exports: [...pipes, AutoFocus],
})
export class PipesModule {}
