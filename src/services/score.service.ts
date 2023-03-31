import { Injectable } from '@angular/core';

const MAX_SCORE = 'max_quiz_score_';

@Injectable({ providedIn: 'root' })
export class ScoreService {
  threshold = 80;

  constructor() {}

  getProgressColor(score) {
    return score >= this.threshold ? 'primary' : 'accent';
  }

  getQuizProgressColor(quizTitle) {
    return this.getQuizMax(quizTitle) >= this.threshold ? 'primary' : 'accent';
  }

  getQuizMax(title) {
    return Number(localStorage.getItem(MAX_SCORE + title)) || 0;
  }

  updateQuizMax(title, score) {
    const maxScore = Math.max(score, this.getQuizMax(title));
    localStorage.setItem(MAX_SCORE + title, String(maxScore));
  }
}
