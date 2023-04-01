import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreService } from './score.service';
import { VoiceService } from './voice.service';
import { SourceService } from './source.service';

@NgModule({
  imports: [CommonModule],
  declarations: [SourceService, ScoreService, VoiceService],
})
export class ServicesModule {}
