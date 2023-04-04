import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizListPageComponent } from './quiz-list-page.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressbarModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    MatListModule,
    MatCardModule,
    MatProgressbarModule,
  ],
  declarations: [QuizListPageComponent],
  exports: [],
})
export class QuizListModule {}
