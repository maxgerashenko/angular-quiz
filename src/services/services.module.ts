import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from './quiz.service';
import { ScoreService } from './score.service';
import { VoiceService } from './voice.service';

@NgModule({
  imports: [CommonModule],
  declarations: [QuizService, ScoreService, VoiceService],
})
export class ServicesModule {}
