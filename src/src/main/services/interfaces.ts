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
  export interface CourseQuizTile {
    title: string;
    quizTileList: Tile[];
  }
  export interface Tile {
    title: string;
    id: string;
  }
  export interface QuizResult {
    quiz: Quiz;
    answers: string[];
  }