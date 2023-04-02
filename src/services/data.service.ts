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

export interface QuestionOptionRaw {
  [key in keys]: string;
}
export interface QuestionRAW {
  [key in keys]: string | number | QuestionOptionRaw[] | string[];
}
export interface QuizRaw {
  title: string;
  questionsList: QuestionRAW[];
}
export interface CourseRaw {
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

const QUESTION_RAW_KEY_MAP = {
  title: /[Tt]ext|itle/,
  answer: /[Aa]nswer/,
  optionsList: /options|optionList/,
  description: /description/,
};

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

  private returnValue = <T>(value: T) => value;
  private trimAndRemoveAlphabetPrefix = (optoin: string) =>
    optoin.trim().replace(/^[a-zA-Z][\)\.,]/, '');
  private getOptionsFromObjectOrArray = (
    value: { [key: string]: string } | string[]
  ) =>
    (typeof value === 'object' ? Object.values(value) : value).map(
      this.trimAndRemoveAlphabetPrefix
    );
  private getAnswerLetterFromStringOrNumber = (value: string | number) =>
    typeof value === 'number'
      ? this.letterPipe.transform(value as number)
      : (value as string).toLocaleLowerCase();
  private QUESTION_RAW_VALUE_MAP = {
    title: this.returnValue,
    optionList: this.getOptionsFromObjectOrArray,
    answer: this.getAnswerLetterFromStringOrNumber,
  };

  getCourseList() {
    return this.convertRawCourseList(this.courseListRaw);
  }

  private addId = <T>(el: T, index: number): T & { id: string } => ({
    ...el,
    id: String(index),
  });
  convertRawCourseList(rawCourseList: CourselistRaw) {
    return rawCourseList.map(this.addId);
  }

  convertQuestion(rawQuestion: any) {
    const newKeys = Object.keys(this.QUESTION_RAW_VALUE_MAP);
    let newQuestion = {};
    const entries = Object.entries(rawQuestion);
    for (const index in entries) {
      let [key, value] = entries[index];
      newQuestion[newKeys[index]] = this.convertValue(key, value);
    }
    return newQuestion as Question;
  }

  private addTitle = <T>(el: T, title: string): T & { title: string } => ({
    ...el,
    title,
  });
  courseList: Course[] = this.dataService
    .getCourseListRaw()
    .map(this.addId)
    .map((id: string, title: string, quizLis: Quiz[]) => ({
      id,
      title,
      quizList: quizList
        .map(this.addId)
        .map((quiz) => this.addTitle(quiz, title))
        .map(({ id, title, courseTite, courseId, questions, summary }) => ({
          id,
          title,
          courseTite,
          courseId,
          summary,
          questionsList: questions
            .map(this.addId)
            .map((question) => this.dataService.convertQuestion(question)),
        })),
    }));
}
