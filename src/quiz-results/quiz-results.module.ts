import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizResultsComponent } from './quiz-results.component';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, PipesModule, MaterialModule],
  declarations: [QuizResultsComponent],
  exports: [QuizResultsComponent],
})
export class QuizResultsModule {}
