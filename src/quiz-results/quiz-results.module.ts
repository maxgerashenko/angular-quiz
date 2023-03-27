import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizResultsComponent } from './quiz-results.component';
import { MaterialModule } from '../material.module';
import { PipesModule } from 'src/pipesAndDirectives/pipes.module';

@NgModule({
  imports: [CommonModule, PipesModule, MaterialModule],
  declarations: [QuizResultsComponent],
  exports: [QuizResultsComponent],
})
export class QuizResultsModule {}
