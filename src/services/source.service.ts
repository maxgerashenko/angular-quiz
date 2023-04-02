import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Course, Quiz, Tile } from './data.service.types';

export interface QuizResult {
  quiz: Quiz;
  answers: string[];
}

@Injectable({ providedIn: 'root' })
export class SourceService {
  result: QuizResult;
  coursesList = this.dataService.getCoursesList();

  constructor(private dataService: DataService) {}

  mapTile = ({ title, id }): Tile => ({
    title,
    id,
  });
  getQuiz(courseId: string, quizId: string) {
    return this.coursesList[courseId].quizzesList.find(
      (quiz) => quiz.id === quizId
    );
  }
  getCourseTileList(): Tile[] {
    return this.coursesList.map(this.mapTile);
  }
  getQuizTileList(courseId: string): Tile[] {
    return this.coursesList[courseId].quizList.map(this.mapTile);
  }
  getCourse(id: string): Course {
    return this.coursesList[id];
  }
  getResult(): QuizResult {
    return this.result;
  }
  setResult(value: QuizResult) {
    this.result = { ...value };
  }
}
