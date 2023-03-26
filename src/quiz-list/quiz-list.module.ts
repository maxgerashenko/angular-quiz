import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizListComponent } from './quiz-list.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [QuizListComponent],
  exports: [QuizListComponent],
})
export class QuizListModule {}
