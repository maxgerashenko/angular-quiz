import { Injectable } from '@angular/core';
import { Course, Quiz, Tile } from './interfaces';
import { QuizResult } from './interfaces';
import { TMP_COURSES_LIST } from './tmp';



@Injectable({ providedIn: 'root' })
export class SourceService {
  coursesList = TMP_COURSES_LIST;

  constructor() {}

  private mapTile = ({ title, id }: { title: string, id: string }): Tile => ({
    title: title,
    id: id,
  });

  getQuiz(courseId: string, quizId: string) {
    return this.coursesList.find((course) => course.id === courseId)!.quizzesList.find(
      (quiz) => quiz.id === quizId
    );
  }

  getCourseTileList(): Tile[] {
    return this.coursesList.map(this.mapTile);
  }

  getQuizTileList(courseId: string): Tile[] {
    return this.coursesList.find((course) => course.id === courseId)!.quizzesList.map(this.mapTile);
  }

  getCourse(id: string): Course {
    return this.coursesList.find((course) => course.id === id)!;
  }
}
