import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizResultPageComponent } from './quiz-result-page.component';
import { PipesModule } from '../pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { QuizQuestionResultComponent } from './quiz-question-result.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [QuizResultPageComponent, QuizQuestionResultComponent],
  exports: [QuizResultPageComponent, QuizQuestionResultComponent],
})
export class QuizResultsModule {}
