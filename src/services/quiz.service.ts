import { Injectable } from '@angular/core';
import { rpcQuiz } from './rpcQuiz';
import { modalsQuiz } from './modalsQuiz';
import { AlphabetLetterPipe } from '../pipesAndDirectives/letter.pipe';
import { AlphabetIndexPipe } from '../pipesAndDirectives/alphabet-index.pipe';
import { modalsQuiz2 } from './modalQuiz2';

export interface Question {
  text: string;
  options: string[];
  answer: string;
  isCorrect?: boolean;
  description?: string;
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
  description: 'description',
});

@Injectable({ providedIn: 'root' })
export class QuizService {
  count = 0;
  sources = [{ ...rpcQuiz }, { ...modalsQuiz }, { ...modalsQuiz2 }];
  quizList: Quiz[];
  result: QuizResult;

  constructor(
    private numberPipe: AlphabetIndexPipe,
    private letterPipe: AlphabetLetterPipe
  ) {
    this.quizList = this.sources.map((rawQuiz, index) =>
      this.convertQuiz(rawQuiz, index)
    );
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
    return this.quizList[quizId];
  }

  private convertQuiz({ title, questions }: any, index: number): Quiz {
    return {
      id: String(index),
      title,
      questions: questions.map((question) =>
        this.convertQuestion(question, QUESTION_MAP)
      ),
    };
  }

  private isAnswer(key: string) {
    return /[Aa]nswer/.test(key);
  }

  private convertQuestion(rawQuestion: any, objectMap: Object): Question {
    const newKeys = Object.keys(objectMap);
    let newQuestion = {};
    const entries = Object.entries(rawQuestion);
    for (const index in entries) {
      let [key, value] = entries[index];
      newQuestion[newKeys[index]] = !this.isAnswer(key)
        ? value
        : typeof value === 'number'
        ? this.letterPipe.transform(value as number)
        : (value as string).toLocaleLowerCase();
    }
    return newQuestion as Question;
  }
}
