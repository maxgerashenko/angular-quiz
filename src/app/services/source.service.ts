import { Injectable } from '@angular/core';
import { TMP_COURSES_LIST } from '../../../data/tmp';

import { Course, Tile } from './interfaces';

@Injectable({ providedIn: 'root' })
export class SourceService {
  coursesList = TMP_COURSES_LIST;

  constructor() {}

  private mapTile = ({ title, id }: { title: string; id: string }): Tile => ({
    title: title,
    id: id,
  });

  getQuiz(courseId: string, quizId: string) {
    return this.coursesList
      .find((course) => course.id === courseId)!
      .quizzesList.find((quiz) => quiz.id === quizId);
  }

  getCourseTileList(): Tile[] {
    return this.coursesList.map(this.mapTile);
  }

  getQuizTileList(courseId: string): Tile[] {
    return this.coursesList
      .find((course) => course.id === courseId)!
      .quizzesList.map(this.mapTile);
  }

  getCourse(id: string): Course {
    return this.coursesList.find((course) => course.id === id)!;
  }

  isLastQuiz(courseId: string, quizId: string) {
    const course = this.getCourse(courseId);
    return this.isLastObjectInArray(course.quizzesList, quizId);
  }

  private isLastObjectInArray(
    array: Partial<{ id: string }>[],
    id: string
  ): boolean {
    const index = array.findIndex((obj) => obj.id === id);
    return index !== -1 && index === array.length - 1;
  }
}
