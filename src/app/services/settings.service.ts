import { Injectable } from '@angular/core';

const VOICE_OVER_SETTINGS = 'settings_voice_over';
const RESULTS_SETTINGS = 'settings_resulst';

interface VoiceOverSettings {
  isVoiceOverOn: boolean;
  isVoiceOverMessagesOn: boolean;
}

@Injectable({ providedIn: 'root' })
export class SettingsService {
  shouldShowresult;

  constructor() {}

  getVoiceOverSettings(): VoiceOverSettings {
    return JSON.parse(this.getFromLocalStorage(VOICE_OVER_SETTINGS));
  }

  setVoiceOverSettings(settings: VoiceOverSettings) {
    localStorage.setItem(VOICE_OVER_SETTINGS, JSON.stringify(settings));
  }

  private getFromLocalStorage(item: string) {
    return localStorage.getItem(VOICE_OVER_SETTINGS);
  }
}
