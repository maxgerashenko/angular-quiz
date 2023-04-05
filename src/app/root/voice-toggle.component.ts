import { Component, OnInit } from '@angular/core';
import { VoiceService } from '../services/voice.service';

@Component({
  selector: 'app-voice-toggle',
  templateUrl: './voice-toggle.component.html',
  styleUrls: ['./voice-toggle.component.css'],
})
export class VoiceToggleComponent implements OnInit {
  voiceOverOptions = [
    {
      isActive: true,
      title: 'Read',
      subtitle: 'Question & Result',
      icon: 'volume_up',
      isVoiceOverOn: true,
      isVoiveOverMessagesOn: true,
    },
    {
      isActive: true,
      title: 'Read',
      subtitle: 'Question',
      icon: 'volume_down',
      isVoiceOverOn: true,
      isVoiveOverMessagesOn: false,
    },
    {
      isActive: false,
      title: 'Turn Off',
      icon: 'volume_off',
      isVoiceOverOn: false,
      isVoiveOverMessagesOn: false,
    },
  ];
  voiceOverIndex = 0;
  voiceOverSettings = this.voiceOverOptions[this.voiceOverIndex];

  constructor(private voiceService: VoiceService) {
    this.init();
  }

  ngOnInit() {}

  private init() {
    const { isVoiceOverOn, isVoiceOverMessagesOn } =
      this.voiceService.getSettings();

    if (isVoiceOverOn && isVoiceOverMessagesOn) {
      this.setVoiceOver(0);
    }
    if (isVoiceOverOn && !isVoiceOverMessagesOn) {
      this.setVoiceOver(1);
    }
    if (!isVoiceOverOn && !isVoiceOverMessagesOn) {
      this.setVoiceOver(2);
    }
  }

  private setVoiceOver(voiceOverIndex) {
    this.voiceOverIndex = voiceOverIndex;
    this.voiceOverSettings = this.voiceOverOptions[this.voiceOverIndex];
  }

  updateVoiceOver() {
    this.setVoiceOver((this.voiceOverIndex + 1) % this.voiceOverOptions.length);
    const { isVoiceOverOn, isVoiveOverMessagesOn } = this.voiceOverSettings;
    this.voiceService.updateSettigns(isVoiceOverOn, isVoiveOverMessagesOn);
  }
}
