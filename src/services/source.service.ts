import { Injectable } from '@angular/core';
import { Course, DataService, Quiz, Tile } from './data.service';

export interface QuizResult {
  quiz: Quiz;
  answers: string[];
}

@Injectable({ providedIn: 'root' })
export class SourceService {
  
  result: QuizResult;

  constructor(private dataService: DataService) {}

  mapTile = ({ title, id }): Tile => ({
    title,
    id,
  });
  getCourseTileList(): Tile[] {
    return this.courseList.map(this.mapTile);
  }
  getQuizTileList(courseId: string): Tile[] {
    return this.courseList[courseId].quizList.map(this.mapTile);
  }
  getCourse(id: string): Course {
    return this.courseList[id];
  }
  getResult(): QuizResult {
    return this.result;
  }
  setResult(value: QuizResult) {
    this.result = { ...value };
  }
}
