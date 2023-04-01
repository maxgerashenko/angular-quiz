import { Injectable } from '@angular/core';
import { Course, DataService, Quiz, Tile } from './data.service';

export interface QuizResult {
  quiz: Quiz;
  answers: string[];
}

@Injectable({ providedIn: 'root' })
export class SourceService {
  private addId = <T>(el: T, index: number): T & { id: string } => ({
    ...el,
    id: String(index),
  });
  private addTitle = <T>(el: T, title: string): T & { title: string } => ({
    ...el,
    title,
  });
  courseList: Course[] = this.dataService
    .getCourseListRaw()
    .map(this.addId)
    .map((id: string, title: string, quizLis: Quiz[]) => ({
      id,
      title,
      quizList: quizList
        .map(this.addId)
        .map((quiz) => this.addTitle(quiz, title))
        .map(({ id, title, courseTite, courseId, questions, summary }) => ({
          id,
          title,
          courseTite,
          courseId,
          summary,
          questionsList: questions
            .map(this.addId)
            .map((question) => this.dataService.convertQuestion(question)),
        })),
    }));
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
