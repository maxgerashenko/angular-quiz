import { Injectable } from '@angular/core';
import { AlphabetLetterPipe } from '../pipesAndDirectives/letter.pipe';

import * as sources from '../sources/';
const { modalsQuiz, modalQuiz2, ...rest } = sources;
import {
  Course,
  Quiz,
  QuestionOptions,
  QuestionOptionsRaw,
  ObjecKeyMapper,
  ObjecValueMapper,
} from './data.service.types';

const QUIZ_RAW_KEY_MAP: ObjecKeyMapper = {
  questionsList: /questions|questionList/,
};

const QUESTION_RAW_KEY_MAP: ObjecKeyMapper = {
  title: /([Tt]ext|itle)|question/,
  answer: /[Aa]nswer/,
  optionsList: /options|optionList/,
  description: /description/,
};

@Injectable({ providedIn: 'root' })
export class DataService {
  coursesListRaw = [
    {
      title: 'English',
      quizzesList: [{ ...modalsQuiz }, { ...modalQuiz2 }],
    },
    {
      title: 'System Design',
      quizzesList: Object.values(rest),
    },
  ];

  constructor(private letterPipe: AlphabetLetterPipe) {}

  getCoursesList(): Course[] {
    return this.coursesListRaw.map((course, courseId) => ({
      ...course,
      id: String(courseId),
      quizzesList: course.quizzesList.map((quiz, quizId) => ({
        ...(this.mapObjectKeysAndValues(quiz, QUIZ_RAW_KEY_MAP) as Quiz),
        courseTitle: course.title,
        courseId: String(courseId),
        id: String(quizId),
        questionsList: quiz.questions
          ? quiz.questions.map((question) =>
              this.mapObjectKeysAndValues(
                question,
                QUESTION_RAW_KEY_MAP,
                this.QUESTION_RAW_VALUE_MAP
              )
            )
          : [],
      })),
    }));
  }

  private returnValue = <T>(value: T): T => value;
  private trimAndRemoveAlphabetPrefix = (option: string) =>
    option.trim().replace(/^[a-zA-Z][\)\.,]/, '');
  private getOptionsFromObjectOrArray = (
    value: QuestionOptionsRaw
  ): QuestionOptions =>
    (Array.isArray(value) ? value : Object.values(value)).map(
      this.trimAndRemoveAlphabetPrefix
    );
  private getAnswerLetterFromStringOrNumber = (value: string | number) =>
    typeof value === 'number'
      ? this.letterPipe.transform(value)
      : value.toLocaleLowerCase();
  private QUESTION_RAW_VALUE_MAP: ObjecValueMapper = {
    title: this.returnValue,
    optionsList: this.getOptionsFromObjectOrArray,
    answer: this.getAnswerLetterFromStringOrNumber,
    description: this.returnValue,
  };

  mapObjectKeysAndValues<T, Q>(
    object: T,
    objectKeyMapper: ObjecKeyMapper,
    objectValueMapper?: ObjecValueMapper
  ): Q {
    return Object.entries(object).reduce((newObject, [oldKey, oldValue]) => {
      const newKey = Object.entries(objectKeyMapper).find(([, regExp]) =>
        regExp.test(oldKey)
      )?.[0];
      newObject[newKey || oldKey] =
        objectValueMapper?.[newKey]?.(oldValue) || oldValue;
      return newObject;
    }, {} as Q);
  }
}
