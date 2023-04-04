import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './quiz-page.component';
import { PipesModule } from '../pipes/pipes.module';
import { QuestionComponent, } from './question.component';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [CommonModule,
    PipesModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    ],
  declarations: [QuizPageComponent, QuestionComponent],
  exports: [QuestionComponent],
})
export class QuizModule {}