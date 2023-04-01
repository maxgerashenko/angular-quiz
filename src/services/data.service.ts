import { Injectable } from '@angular/core';
import { messageQQuiz1 } from '../sources/messageQQuiz1';
import { messageQQuiz2 } from '../sources/messageQQuiz2';
import { messageQQuiz3 } from '../sources/messageQQuiz3';
import { messageQQuiz4 } from '../sources/messageQQuiz4';
import { messageQQuiz5 } from '../sources/messageQQuiz5';
import { rpcQuiz } from '../sources/1_rpcQuiz';
import { consistensyQuiz } from '../sources/2_consitensyQuiz';
import { failureModelQuiz } from '../sources/3_failureModelQuiz';
import { availabilityQuiz } from '../sources/4_availabilityQuiz';
import { reliabilityQuiz } from '../sources/5_reliability';
import { AlphabetLetterPipe } from '../pipesAndDirectives/letter.pipe';
import { AlphabetIndexPipe } from '../pipesAndDirectives/alphabet-index.pipe';
import { modalsQuiz } from '../sources/modalsQuiz';
import { modalsQuiz2 } from '../sources/modalQuiz2';

export interface Question {
  title: string;
  optionList: string[];
  answer: string;
  isCorrect?: boolean;
  description?: string;
}

export interface Quiz {
  courseTitle: string;
  courseId: string;
  id: string;
  title: string;
  questionList: Question[];
  summary?: string;
}

export interface Course {
  id: string;
  title: string;
  quizList: Quiz[];
}

export interface CourseRaw {
  title: string;
  quizList: Quiz[];
}

export interface QuizRaw {
  title: string;
  quizList: Quiz[];
}

export interface CourseQuizTile {
  title: string;
  quizTileList: Tile[];
}

export interface Tile {
  title: string;
  id: string;
}

const QUESTION_MAP = Object.freeze({
  text: 'title',
  options: 'optionList',
  answer: 'answer',
  description: 'description',
});

@Injectable({ providedIn: 'root' })
export class DataService {
  courseListRaw = [
    {
      title: 'English',
      quizList: [{ ...modalsQuiz }, { ...modalsQuiz2 }],
    },
    {
      title: 'System Design',
      quizList: [
        { ...rpcQuiz },
        { ...consistensyQuiz },
        { ...failureModelQuiz },
        { ...availabilityQuiz },
        { ...reliabilityQuiz },
        { ...messageQQuiz1 },
        { ...messageQQuiz2 },
        { ...messageQQuiz3 },
        { ...messageQQuiz4 },
        { ...messageQQuiz5 },
      ],
    },
  ];

  constructor(
    private numberPipe: AlphabetIndexPipe,
    private letterPipe: AlphabetLetterPipe
  ) {}

  getCourseListRaw() {
    return this.courseListRaw;
  }

  isAnswer(key: string) {
    return /[Aa]nswer/.test(key);
  }

  getNormalizedKey(key: string) {
    if (/[Aa]nswer/.test(key)) return 'answer';
    if (/option/.test(key)) return 'options';
    return key;
  }

  convertQuestion(rawQuestion: any) {
    const newKeys = Object.keys(QUESTION_MAP);
    let newQuestion = {};
    const entries = Object.entries(rawQuestion);
    for (const index in entries) {
      let [key, value] = entries[index];
      switch (this.getNormalizedKey(key)) {
        case 'answer':
          return typeof value === 'number'
            ? this.letterPipe.transform(value as number)
            : (value as string).toLocaleLowerCase();
        case 'options':
          return Array.isArray(value)
            ? value.map((option) =>
                option.trim().replace(/^[a-zA-Z][\)\.,]/, '')
              )
            : typeof value === 'object' && Object.values(value);
        default:
          return value;
      }

      newQuestion[newKeys[index]] = !this.isAnswer(key)
        ? value
        : typeof value === 'number'
        ? this.letterPipe.transform(value as number)
        : (value as string).toLocaleLowerCase();
    }
    return newQuestion as Question;
  }
}
