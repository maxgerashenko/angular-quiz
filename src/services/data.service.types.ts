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
  optionsList: QuestionOptions;
  answer: string;
  isCorrect?: boolean;
  description?: string;
}
export type QuestionOptions = string[];

export interface CourseRaw {
  title: string;
  quizzesList: QuizRaw[];
}
export interface QuizRaw {
  id: string;
  title: string;
  questions?: QuestionRaw[];
  summary?: string;
}
type RawValueTypes = string | number | QuestionOptionsRaw;
export interface QuestionRaw {
  [key: string]: RawValueTypes;
}
export interface QuestionOptionObject {
  [key: string]: string;
}
export type QuestionOptionsRaw = QuestionOptionObject | string[];

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
