import { Injectable } from '@angular/core';
import { QuizResult } from './interfaces';
import { castExists } from '../utils';

const MAX_SCORE = 'max_quiz_score_';
const THRESHOLD = 80;
const SECOND_THRESHOLD = 50;

@Injectable({ providedIn: 'root' })
export class ScoreService {
  result: QuizResult|undefined;
  threshold = 80;

  constructor() {}
  setResult(value: QuizResult) {
    this.result = { ...value };
  }
  getResult(): QuizResult | undefined {
    return this.result;
  }

  hasPass(score: number) {
    return score > THRESHOLD;
  }

  hasAlmostPass(score: number) {
    return score > SECOND_THRESHOLD;
  }

  getProgressColor(score: number) {
    return score >= this.threshold ? 'primary' : 'accent';
  }

  getQuizProgressColor(quizTitle: string) {
    return this.getQuizMax(quizTitle) >= this.threshold ? 'primary' : 'accent';
  }

  getQuizMax(title: string) {
    return Number(localStorage.getItem(MAX_SCORE + title)) || 0;
  }

  updateQuizMax(title:string, score: number) {
    const maxScore = Math.max(score, this.getQuizMax(title));
    localStorage.setItem(MAX_SCORE + title, String(maxScore));
  }

  calcScore(correct: number, total: number) {
    return Math.trunc((correct / total) * 100);
  }
}
