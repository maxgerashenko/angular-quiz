import { Component, OnInit } from '@angular/core';
import { VoiceService } from '../services/voice.service';

export interface ToggleButtonOptions<T> {
  isActive: boolean;
  title: string;
  subtitle?: string;
  icon: string;
  value: T;
}

export interface VoiveSettings {
  isVoiceOverOn: boolean;
  isVoiveOverMessagesOn: boolean;
}

const VOICE_OVER_OPTIONS = [
  {
    isActive: true,
    title: 'Read',
    subtitle: 'Question & Result',
    icon: 'volume_up',
    value: {
      isVoiceOverOn: true,
      isVoiveOverMessagesOn: true,
    },
  },
  {
    isActive: true,
    title: 'Read',
    subtitle: 'Question',
    icon: 'volume_down',
    value: {
      isVoiceOverOn: true,
      isVoiveOverMessagesOn: false,
    },
  },
  {
    isActive: false,
    title: 'Turn Off',
    icon: 'volume_off',
    value: {
      isVoiceOverOn: false,
      isVoiveOverMessagesOn: false,
    },
  },
];

@Component({
  selector: 'app-voice-toggle',
  templateUrl: './voice-toggle.component.html',
  styleUrls: ['./voice-toggle.component.css'],
})
export class VoiceToggleComponent implements OnInit {
  voiceOverOptions: ToggleButtonOptions<VoiveSettings>[] = VOICE_OVER_OPTIONS;
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
    const { isVoiceOverOn, isVoiveOverMessagesOn } =
      this.voiceOverSettings.value;
    this.voiceService.updateSettigns(isVoiceOverOn, isVoiveOverMessagesOn);
  }
}
