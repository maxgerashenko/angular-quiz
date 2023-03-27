import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuestionModule } from '../question/question.module';
import { QuizResultsModule } from '../quiz-results/quiz-results.module';
import { MaterialModule } from '../material.module';
import { PipesModule } from '../pipesAndDirectives/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    QuestionModule,
    QuizResultsModule,
    PipesModule,
    MaterialModule,
  ],
  declarations: [QuizComponent],
  exports: [QuizComponent],
})
export class QuizModule {}
