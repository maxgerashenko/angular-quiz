import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizListComponent } from './quiz-list.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { PipesModule } from '../pipesAndDirectives/pipes.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, PipesModule],
  declarations: [QuizListComponent],
  exports: [QuizListComponent],
})
export class QuizListModule {}
