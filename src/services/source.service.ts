import { Injectable } from '@angular/core';
import { modalsQuiz } from './modalsQuiz';
import { AlphabetLetterPipe } from '../pipesAndDirectives/letter.pipe';
import { AlphabetIndexPipe } from '../pipesAndDirectives/alphabet-index.pipe';
import { modalsQuiz2 } from './modalQuiz2';
import { messageQQuiz1 } from './messageQQuiz1';
import { messageQQuiz2 } from './messageQQuiz2';
import { messageQQuiz3 } from './messageQQuiz3';
import { messageQQuiz4 } from './messageQQuiz4';
import { messageQQuiz5 } from './messageQQuiz5';
import { RPCQuiz } from './1_RPCQuiz';
import { consistensyQuiz } from './2_consitensyQuiz';
import { failureModelQuiz } from './3_failureModelQuiz';
import { availabilityQuiz } from './4_AvailabilityQuiz';

export interface Question {
  text: string;
  options: string[];
  answer: string;
  isCorrect?: boolean;
  description?: string;
}

export interface Course {
  id: string;
  title: string;
  quizList: Quiz[];
}

export interface Quiz {
  id?: string;
  course?: string;
  title: string;
  questions: Question[];
  summary?: string;
}

export interface CourseQuizTile {
  title: string;
  quizTileList: Tile[];
}

export interface QuizResult {
  quiz: Quiz;
  answers: string[];
}

export interface Tile {
  title: string;
  id: string;
}

const QUESTION_MAP = Object.freeze({
  text: 'text',
  options: 'options',
  answer: 'answer',
  description: 'description',
});

@Injectable({ providedIn: 'root' })
export class SourceService {
  count = 0;
  courses: Course[] = [
    {
      id: '0',
      title: 'English',
      quizList: this.convertQuizzes([{ ...modalsQuiz }, { ...modalsQuiz2 }]),
    },
    {
      id: '1',
      title: 'System Design',
      quizList: this.convertQuizzes([
        { ...RPCQuiz },
        { ...consistensyQuiz },
        { ...failureModelQuiz },
        { ...availabilityQuiz },
        { ...messageQQuiz1 },
        { ...messageQQuiz2 },
        { ...messageQQuiz3 },
        { ...messageQQuiz4 },
        { ...messageQQuiz5 },
      ]),
    },
  ];
  courseList: Course[];
  result: QuizResult;

  constructor(
    private numberPipe: AlphabetIndexPipe,
    private letterPipe: AlphabetLetterPipe
  ) {
    this.courseList = this.courses.map(({ id, title, quizList }) => {
      return {
        id,
        title,
        quizList: quizList.map((rawQuiz, index) =>
          this.convertQuiz(rawQuiz, index)
        ),
      };
    });
  }
  getCourseTileList(): Tile[] {
    return this.courseList.map(({ title, id }) => ({
      title,
      id,
    }));
  }
  getCourse(id: string) {
    return this.courseList[id];
  }

  getResult() {
    return this.result;
  }
  setResult(value: QuizResult) {
    this.result = { ...value };
  }
  getCourseQuizTile(): CourseQuizTile {
    return {
      title: this.courses[1].title,
      quizTileList: this.courses[1].quizList.map(({ title, id }) => ({
        title,
        id,
      })),
    };
  }

  getQuiz(quizId: string) {
    return {
      course: this.courses[1].title,
      ...this.courses[1].quizList[quizId],
    };
  }

  private convertQuizzes(array: any[]) {
    return array.map((rawQuiz, index) => this.convertQuiz(rawQuiz, index));
  }

  private convertQuiz({ title, questions, summary }: any, index: number): Quiz {
    return {
      id: String(index),
      title,
      summary,
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
