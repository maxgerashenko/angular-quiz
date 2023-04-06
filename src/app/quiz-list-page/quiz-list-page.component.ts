import { Component } from '@angular/core';
import { Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { SourceService } from '../services/source.service';
import { ScoreService } from '../services/score.service';
import { filter } from 'rxjs/operators';
import { Subject, takeUntil } from 'rxjs';
import { Course } from '../services/interfaces';
import { MenuService } from '../services/menu.service';

@Component({
  templateUrl: './quiz-list-page.component.html',
  styleUrls: ['./quiz-list-page.component.scss'],
})
export class QuizListPageComponent {
  course?: Course;
  destroy = new Subject();

  constructor(
    private readonly sourceService: SourceService,
    private router: Router,
    public scoreService: ScoreService,
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {
    this.updateCourse();
    this.menuService.openMenu();
  }

  updateCourse() {
    let courseId = this.route.snapshot.queryParams['id'];
    this.course = this.sourceService.getCourse(courseId);
  }

  ngOnInit() {
    this.router.events
      .pipe(
        takeUntil(this.destroy),
        filter((event: unknown) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.updateCourse();
      });
  }

  openQuiz(courseId: string, quizId: string) {
    this.router.navigate(['/quiz'], { queryParams: { courseId, quizId } });
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
