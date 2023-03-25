import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestionComponent } from './question.component';
import { PipesModule } from '../pipes/pipes.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, PipesModule, MaterialModule],
  declarations: [QuizQuestionComponent],
  exports: [QuizQuestionComponent],
})
export class QuestionModule {}
