import { Component, QueryList, ViewChildren } from '@angular/core';
import { Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { SourceService } from '../services/source.service';
import { ScoreService } from '../services/score.service';
import { filter } from 'rxjs/operators';
import { Subject, takeUntil } from 'rxjs';
import { Course } from '../services/interfaces';
import { MenuService } from '../services/menu.service';
import { MatListItem } from '@angular/material/list';

@Component({
  templateUrl: './quiz-list-page.component.html',
  styleUrls: ['./quiz-list-page.component.scss'],
})
export class QuizListPageComponent {
  @ViewChildren(MatListItem) options: QueryList<MatListItem>;

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

  updateCourse() {
    let courseId = this.route.snapshot.queryParams['id'];
    this.course = this.sourceService.getCourse(courseId);
  }

  ngAfterViewInit() {
    this.resetFoucs();
  }

  toggleMenu() {
    setTimeout(() => {
      this.resetFoucs();
    }, 30);
  }

  resetFoucs() {
    this.options.first._elementRef.nativeElement.focus();
  }

  openQuiz(courseId: string, quizId: string) {
    this.router.navigate(['/quiz'], { queryParams: { courseId, quizId } });
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
