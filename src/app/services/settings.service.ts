import { Injectable } from '@angular/core';

const VOICE_OVER_SETTINGS = 'settings_voice_over';
const RESULTS_SETTINGS = 'settings_resulst';

interface VoiceOverSettings {
  isVoiceOverOn: boolean;
  isVoiceOverMessagesOn: boolean;
}

interface ResultSettings {
  isLocalResultOn: boolean;
}

@Injectable({ providedIn: 'root' })
export class SettingsService {
  shouldShowresult;

  constructor() {}

  getVoiceOverSettings(): VoiceOverSettings {
    const settingsString =
      this.getFromLocalStorage(VOICE_OVER_SETTINGS) || '{}';
    return JSON.parse(settingsString);
  }

  setVoiceOverSettings(settings: VoiceOverSettings) {
    localStorage.setItem(VOICE_OVER_SETTINGS, JSON.stringify(settings));
  }

  getResulstSettings(): ResultSettings {
    const settingsString = this.getFromLocalStorage(RESULTS_SETTINGS) || '{}';
    return JSON.parse(settingsString);
  }

  setResulstSettings(settings: ResultSettings) {
    localStorage.setItem(RESULTS_SETTINGS, JSON.stringify(settings));
  }

  private getFromLocalStorage(item: string) {
    return localStorage.getItem(item);
  }
}
