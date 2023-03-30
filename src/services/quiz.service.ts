import { Injectable } from '@angular/core';
import { rpcQuiz } from './rpcQuiz';
import { modalsQuiz } from './modalsQuiz';

export interface Question {
  text: string;
  options: string[];
  answer: string;
  isCorrect?: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface QuizTile {
  title: string;
  id: string;
}

export interface QuizResult {
  quiz: Quiz;
  answers: string[];
}

const QUESTION_MAP = Object.freeze({
  text: 'text',
  options: 'options',
  answer: 'answer',
});

@Injectable({ providedIn: 'root' })
export class QuizService {
  count = 0;
  sources = [{ ...rpcQuiz }, { ...modalsQuiz }];
  quizList: Quiz[];
  result: QuizResult;

  constructor() {
    this.quizList = this.sources.map((rawQuiz) => this.convertQuiz(rawQuiz));
  }

  getResult() {
    return this.result;
  }

  setResult(value: QuizResult) {
    this.result = { ...value };
  }

  getQuizTilesList(): QuizTile[] {
    return this.quizList.map(({ title, id }) => ({
      title,
      id,
    }));
  }

  getQuiz(quizId: string) {
    return this.quizList.find(({ id }) => id === quizId);
  }

  private convertQuiz({ title, questions }: any): Quiz {
    return {
      id: String(this.count++),
      title,
      questions: questions.map((question) =>
        this.convertQuestion(question, QUESTION_MAP)
      ),
    };
  }

  private convertQuestion(rawQuestion: any, objectMap: Object): Question {
    const keys = Object.keys(objectMap);
    let newQuestion = {};
    const entries = Object.entries(rawQuestion);
    for (const index in Object.entries(rawQuestion)) {
      let [value] = entries[index];
      newQuestion[keys[index]] = value;
    }
    return newQuestion as Question;
  }
}
