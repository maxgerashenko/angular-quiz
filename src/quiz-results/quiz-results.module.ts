import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizResultsComponent } from './quiz-results.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [CommonModule, PipesModule],
  declarations: [QuizResultsComponent],
  exports: [QuizResultsComponent],
})
export class QuizResultsModule {}
