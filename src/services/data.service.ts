import { Injectable } from '@angular/core';
import { AlphabetLetterPipe } from '../pipesAndDirectives/letter.pipe';
import {
  modalsQuiz,
  modalQuiz2,
  rpcQuiz,
  consistensyQuiz,
  failureModelQuiz,
  availabilityQuiz,
  reliabilityQuiz,
  messageQQuiz1,
  messageQQuiz2,
  messageQQuiz3,
  messageQQuiz4,
  messageQQuiz5,
} from '../sources/';
import {
  Course,
  CourseRaw,
  ObjecKeyMapper,
  Question,
  QuestionOptions,
  QuestionOptionsRaw,
  QuestionRaw,
  Quiz,
  QuizRaw,
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
export interface ObjecValueMapper {
  [key: string]: (...rest) => any;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  coursesListRaw = [
    {
      title: 'English',
      quizzesList: [{ ...modalsQuiz }, { ...modalQuiz2 }],
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

  private returnValue = <T>(value: T): T => value;
  private trimAndRemoveAlphabetPrefix = (optoin: string) =>
    optoin.trim().replace(/^[a-zA-Z][\)\.,]/, '');
  private getOptionsFromObjectOrArray = (
    value: QuestionOptionsRaw
  ): QuestionOptions =>
    (typeof value === 'object'
      ? Object.values(<object>value)
      : <string[]>value
    ).map(this.trimAndRemoveAlphabetPrefix);
  private getAnswerLetterFromStringOrNumber = (value: string | number) =>
    typeof value === 'number'
      ? this.letterPipe.transform(<number>value)
      : (<string>value).toLocaleLowerCase();
  private QUESTION_RAW_VALUE_MAP: ObjecValueMapper = {
    title: this.returnValue,
    optionsList: this.getOptionsFromObjectOrArray,
    answer: this.getAnswerLetterFromStringOrNumber,
    description: this.returnValue,
  };

  getCoursesList(): Course[] {
    return this.convertRawCourseList(this.coursesListRaw);
  }

  convertRawCourseList(rawCourseList: CourseRaw[]): Course[] {
    return rawCourseList
      .map(this.addId)
      .map(this.mapQuizzesListWithCourseMetaData)
      .map(this.mapCourseQuizzesListKeyAndValues)
      .map(this.mapCourseQuizesListQuestions);
  }
  private addId = <T>(el: T, index: number): T & { id: string } => ({
    ...el,
    id: String(index),
  });
  private addCourseTitleAndCourseIdToTheQuiz =
    (course: CourseRaw & { id: string }) =>
    (quiz: QuizRaw): QuizRaw & { courseTitle: string; courseId: string } => ({
      ...quiz,
      courseTitle: course.title,
      courseId: course.id,
    });
  private mapQuizzesListWithCourseMetaData = (
    course: CourseRaw & { id: string }
  ): CourseRaw & {
    id: string;
    quizzesList: (QuizRaw & {
      courseId: string;
      courseTitle: string;
    })[];
  } => ({
    ...course,
    quizzesList: course.quizzesList.map(
      this.addCourseTitleAndCourseIdToTheQuiz(course)
    ),
  });
  private mapQuizKeyAndValues = (
    quiz: QuizRaw & {
      courseId: string;
      courseTitle: string;
    }
  ): Omit<QuizRaw, 'questions'> & {
    courseId: string;
    courseTitle: string;
    id: string;
    title: string;
    questionsList: QuestionRaw[];
  } => ({
    ...this.mapObjectKeyAndValues<
      QuizRaw & {
        courseId: string;
        courseTitle: string;
      },
      Omit<QuizRaw, 'questions'> & {
        courseId: string;
        courseTitle: string;
        id: string;
        title: string;
        questionsList: QuestionRaw[];
      }
    >(quiz, QUIZ_RAW_KEY_MAP),
  });
  private mapCourseQuizzesListKeyAndValues = (
    course: CourseRaw & {
      id: string;
      quizzesList: (QuizRaw & {
        courseId: string;
        courseTitle: string;
      })[];
    }
  ): CourseRaw & {
    id: string;
    quizzesList: (Omit<QuizRaw, 'questions'> & {
      courseId: string;
      courseTitle: string;
      id: string;
      title: string;
      questionsList: QuestionRaw[];
    })[];
  } => ({
    ...course,
    quizzesList: course.quizzesList.map(this.mapQuizKeyAndValues),
  });
  private mapQuizQuestion = (question: QuestionRaw): Question => ({
    ...this.mapObjectKeyAndValues<QuestionRaw, Question>(
      question,
      QUESTION_RAW_KEY_MAP,
      this.QUESTION_RAW_VALUE_MAP
    ),
  });
  private mapQuizQuestionsList = (
    quiz: QuizRaw & {
      courseId: string;
      courseTitle: string;
      id: string;
      title: string;
      questionsList: QuestionRaw[];
    }
  ): Quiz => ({
    ...quiz,
    questionsList: quiz.questionsList.map(this.mapQuizQuestion),
  });

  private mapCourseQuizesListQuestions = (
    course: CourseRaw & {
      id: string;
      quizzesList: (Omit<QuizRaw, 'questions'> & {
        courseId: string;
        courseTitle: string;
        id: string;
        title: string;
        questionsList: QuestionRaw[];
      })[];
    }
  ): Course => ({
    ...course,
    quizzesList: course.quizzesList.map(this.mapQuizQuestionsList),
  });

  mapObjectKeyAndValues<T, Q>(
    object: T,
    objecKeyMapper: ObjecKeyMapper,
    objectValueMapper?: ObjecValueMapper
  ): Q {
    const newObject = <Q>{};
    const oldEntries = Object.entries(object);
    for (const [oldKey, oldValue] of oldEntries) {
      const newKey = Object.entries(objecKeyMapper)
        .map(([key, regExp]) => (regExp.test(oldKey) ? key : null))
        .find((key) => typeof key === 'string');
      const newValue =
        !!objectValueMapper && !!newKey
          ? objectValueMapper[newKey](oldValue)
          : oldValue;
      newObject[newKey || oldKey] = newValue;
    }
    return newObject;
  }
}
