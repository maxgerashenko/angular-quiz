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
import { modalsQuiz } from '../sources/modalsQuiz';
import { modalsQuiz2 } from '../sources/modalQuiz2';

export interface Course {
  id: string;
  title: string;
  quizzesList: Quiz[];
}
export interface Quiz {
  courseTitle: string;
  courseId: string;
  id: string;
  title: string;
  questionsList: Question[];
  summary?: string;
}
export interface Question {
  title: string;
  optionsList: string[];
  answer: string;
  isCorrect?: boolean;
  description?: string;
}

export interface CourseRaw {
  title: string;
  quizzesList: QuizRaw[];
}
export interface QuizRaw {
  title: string;
  questions: QuestionRaw[];
  summary?: string;
}
type RawValueTypes = string | number | QuestionOptionRaw[] | string[];
export interface QuestionRaw {
  [key: string]: RawValueTypes;
}
export interface QuestionOptionRaw {
  [key: string]: string;
}

export interface CourseQuizTile {
  title: string;
  quizTileList: Tile[];
}
export interface Tile {
  title: string;
  id: string;
}

export interface ObjecKeyMapper {
  [key: string]: RegExp;
}
const QUIZ_RAW_KEY_MAP: ObjecKeyMapper = {
  id: /quizId|id/,
  summary: /[sS]ummary|[qQ]uizSummary/,
  title: /[Tt]ext|itle/,
  questionsList: /questions|questionList/,
};

const QUESTION_RAW_KEY_MAP: ObjecKeyMapper = {
  title: /[Tt]ext|itle/,
  answer: /[Aa]nswer/,
  optionsList: /options|optionList/,
  description: /description/,
};
export interface ObjecValueMapper {
  [key: string]: (...rest) => any;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  coursesListRaw = [
    {
      title: 'English',
      quizzesList: [{ ...modalsQuiz }, { ...modalsQuiz2 }],
    },
    {
      title: 'System Design',
      quizzesList: [
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

  constructor(private letterPipe: AlphabetLetterPipe) {}

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
  private QUESTION_RAW_VALUE_MAP: ObjecValueMapper = {
    title: this.returnValue,
    optionList: this.getOptionsFromObjectOrArray,
    answer: this.getAnswerLetterFromStringOrNumber,
  };

  getCoursesList(): Course[] {
    return this.convertRawCourseList(this.coursesListRaw);
  }

  private addId = <T>(el: T, index: number): T & { id: string } => ({
    ...el,
    id: String(index),
  });
  private addTitle = <T>(el: T, title: string): T & { title: string } => ({
    ...el,
    title,
  });
  convertRawCourseList(rawCourseList: CourseRaw[]) {
    return rawCourseList
      .map(this.addId)
      .map((course: CourseRaw & { id: string }) => ({
        ...course,
        quizzesList: course.quizzesList.map(
          (quiz: QuizRaw & { courseTitle: string; courseId: string }) => ({
            ...quiz,
            courseTitle: course.title,
            courseId: course.id,
          })
        ),
      }))
      .map(
        (course: CourseRaw & { id: string }): Course => ({
          ...course,
          quizzesList: course.quizzesList.map((quiz: QuizRaw) => ({
            ...this.mapKeyAndValues(quiz, QUIZ_RAW_KEY_MAP),
          })),
        })
      );
  }

  mapKeyAndValues<T>(
    object: T,
    objecKeyMapper: ObjecKeyMapper,
    objectValueMapper?: ObjecValueMapper
  ): Quiz {
    const newObject = {};
    const oldEntries = Object.entries(object);
    for (const [oldKey, oldValue] of oldEntries) {
      const newKey = Object.entries(objecKeyMapper)
        .map(([key, regExp]) => (regExp.test(oldKey) ? key : null))
        .find((key) => typeof key === 'string');
      const newValue = objectValueMapper
        ? objectValueMapper[newKey](oldValue)
        : oldValue;
      newObject[newKey] = newValue;
    }
    return newObject as Quiz;
  }

  // convertQuestion(rawQuestion: any) {
  //   const newKeys = Object.keys(this.QUESTION_RAW_VALUE_MAP);
  //   const entries = Object.entries(rawQuestion);
  //   for (const index in entries) {
  //     let [key, value] = entries[index];
  //     newQuestion[newKeys[index]] = this.convertValue(key, value);
  //   }
  //   return newQuestion as Question;
  // }
}
