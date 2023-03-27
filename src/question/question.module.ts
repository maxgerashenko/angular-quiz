import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestionComponent } from './question.component';
import { MaterialModule } from '../material.module';
import { PipesModule } from '../pipesAndDirectives/pipes.module';

@NgModule({
  imports: [CommonModule, PipesModule, MaterialModule],
  declarations: [QuizQuestionComponent],
  exports: [QuizQuestionComponent],
})
export class QuestionModule {}
