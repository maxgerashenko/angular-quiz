import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreService } from './score.service';
import { VoiceService } from './voice.service';
import { SourceService } from './source.service';
import { MenuService } from './menu.service';
import { DataService } from './data.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SourceService,
    ScoreService,
    VoiceService,
    MenuService,
    DataService,
  ],
})
export class ServicesModule {}
