import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizResultPageComponent } from './quiz-result-page.component';
import { PipesModule } from '../pipes/pipes.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule, 
    PipesModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatProgressBarModule,
    MatFormFieldModule,
  ],
  declarations: [
    QuizResultPageComponent,
  ],
  exports: [QuizResultPageComponent],
})
export class QuizResultsModule {}
