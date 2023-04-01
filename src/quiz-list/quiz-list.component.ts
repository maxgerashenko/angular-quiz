import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Course, SourceService } from '../services/source.service';
import { ScoreService } from '../services/score.service';
import { filter } from 'rxjs/operators';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css'],
})
export class QuizListComponent {
  routerSubscription: Subscription;
  destroy = new Subject();

  course: Course;
  constructor(
    private readonly sourceService: SourceService,
    private router: Router,
    public scoreService: ScoreService,
    private route: ActivatedRoute
  ) {
    this.updateCourse();
  }

  updateCourse() {
    let courseId = this.route.snapshot.queryParams.id;
    this.course = this.sourceService.getCourse(courseId);
  }

  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(
        takeUntil(this.destroy),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.updateCourse();
      });
  }

  openQuiz(quizId: string) {
    this.router.navigate(['/quiz'], { queryParams: { id: quizId } });
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
