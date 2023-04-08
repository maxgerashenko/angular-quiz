import { Injectable } from '@angular/core';
import { QuizQuestionResultComponent } from '../quiz-result-page/quiz-question-result.component';
import { Question, QuestionWithResult } from './interfaces';

export interface QuizResult {
  quizTitle: string;
  courseId: string;
  questions: QuestionWithResult[];
  quizId: string;
}

const MAX_SCORE = 'max_quiz_score_';
const THRESHOLD = 80;
const SECOND_THRESHOLD = 50;

@Injectable({ providedIn: 'root' })
export class ScoreService {
  quizResult: QuizResult | undefined;
  threshold = 80;

  constructor() {}

  setResult(questions: QuestionWithResult[], quizTitle, courseId, quizId) {
    this.quizResult = { quizTitle, questions, courseId, quizId };
  }
  getResult(): QuizResult | undefined {
    return this.quizResult;
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

  updateQuizMax(title: string, score: number) {
    const maxScore = Math.max(score, this.getQuizMax(title));
    localStorage.setItem(MAX_SCORE + title, String(maxScore));
  }

  calcScore(correct: number, total: number) {
    return Math.trunc((correct / total) * 100);
  }
}
