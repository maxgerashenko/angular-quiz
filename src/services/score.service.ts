import { Injectable } from '@angular/core';

const MAX_SCORE = 'max_quiz_score_';
const THRESHOLD = 80;
const SECOND_THRESHOLD = 50;

@Injectable({ providedIn: 'root' })
export class ScoreService {
  threshold = 80;

  constructor() {}

  hasPass(score: number) {
    return score > THRESHOLD;
  }

  hasAlmostPass(score: number) {
    return score > SECOND_THRESHOLD;
  }

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

  calcScore(correct: number, total: number) {
    return Math.trunc((correct / total) * 100);
  }
}
