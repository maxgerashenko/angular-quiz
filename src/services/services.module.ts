import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './quiz.service';
import { ScoreService } from './score.service';

@NgModule({
  imports: [CommonModule],
  declarations: [QuizService, ScoreService],
})
export class ServicesModule {}
