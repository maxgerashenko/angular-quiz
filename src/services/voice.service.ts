import { Injectable } from '@angular/core';

const SPEACH_DELAY = 800;

@Injectable({ providedIn: 'root' })
export class VoiceService {
  private speech = new SpeechSynthesisUtterance();
  private replacements = {
    '_+': 'bla bla',
  };

  constructor() {
    this.initVoice();
  }

  private initVoice(speed = 1.2, voiceName = 'Samantha') {
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find((voice) => voice.name === voiceName);
    this.speech.rate = speed;
    this.speech.voice = voice;
    this.speech.volume = 1.0;
    this.speech.lang = 'en-US';
  }

  cleanSpeech(text) {
    let newText = text;
    for (const pattern in this.replacements) {
      if (this.replacements.hasOwnProperty(pattern)) {
        const replacement = this.replacements[pattern];
        const regexp = new RegExp(pattern, 'gi');
        newText = newText.replace(regexp, replacement);
      }
    }
    return newText;
  }

  voiceOver(text: string) {
    window.speechSynthesis.cancel();
    this.speech.text = this.cleanSpeech(text);
    setTimeout(() => {
      window.speechSynthesis.speak(this.speech);
    }, SPEACH_DELAY);
  }

  stop() {
    window.speechSynthesis.cancel();
  }
}
