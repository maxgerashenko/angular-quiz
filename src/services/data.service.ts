import { Injectable } from '@angular/core';
import { LetterIndexPipe } from '../pipesAndDirectives/letter-index.pipe';

import * as sources from '../sources/';

import {
  Course,
  Quiz,
  QuestionOptions,
  QuestionOptionsRaw,
  ObjecKeyMapper,
  ObjecValueMapper,
  QuizRaw,
  CourseRaw,
  QuestionRaw,
  Question,
  QuizRawWithIdTitle,
} from './data.service.types';

const QUIZ_RAW_KEY_MAP: ObjecKeyMapper = {
  questionsList: /questions|questionList/,
};
const { modalsQuiz, modalQuiz2, ...rest } = sources;
const QUESTION_RAW_KEY_MAP: ObjecKeyMapper = {
  title: /text|title|question/,
  optionsList: /options/,
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

  constructor(private letterIndexPipe: LetterIndexPipe) {}

  // Main method to get the courses list
  getCoursesList(): Course[] {
    return this.coursesListRaw.map(this.processCourse);
  }

  // Process a course and its quizzes
  private processCourse = (course: CourseRaw, courseId: number): Course => {
    return {
      ...course,
      id: String(courseId),
      quizzesList: course.quizzesList
        .map(this.mapQuizKeysValues)
        .map(quiz => {
          ...quiz,
          courseId: course.id,
          courseTitle: course.title,
        })
        .map(this.processQuiz),
    };
  };

  private mapQuizKeysValues(quiz: QuizRaw) {
    return this.mapObjectKeysAndValues(quiz, QUIZ_RAW_KEY_MAP);
  }

  // Process a quiz and its questions
  private processQuiz = (quiz): Quiz => {
    return {
      ...quiz,
      questionsList: quiz.questionsList
      .map(this.processQuestion)
    };
  };

  // Process a question
  private processQuestion = (question: QuestionRaw): Question => ({this.mapObjectKeysAndValues(
      question,
      QUESTION_RAW_KEY_MAP,
      this.QUESTION_RAW_VALUE_MAP
    )})

  // Utility methods
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
      ? this.letterIndexPipe.transform(value)
      : value.toLocaleLowerCase();
  private QUESTION_RAW_VALUE_MAP: ObjecValueMapper = {
    title: this.returnValue,
    optionsList: this.getOptionsFromObjectOrArray,
    answer: this.getAnswerLetterFromStringOrNumber,
    description: this.returnValue,
  };

  // Map object keys and values using the provided mappers
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
