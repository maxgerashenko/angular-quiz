import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SourceService } from '../services/source.service';
import { MenuService } from '../services/menu.service';
import { MatSidenav } from '@angular/material/sidenav';
import {
  MatActionList,
  MatListItem,
  MatListOption,
} from '@angular/material/list';
import { Subject, takeUntil } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

const VIEW_DELAY = 30;

@Component({
  selector: 'app-courses-nav',
  templateUrl: './courses-nav.component.html',
  styleUrls: ['./courses-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesNavComponent implements AfterViewInit, OnDestroy {
  @ViewChildren(MatListItem) options: QueryList<MatListItem>;

  destroy = new Subject();

  courses = this.sourceService.getCourseTileList();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sourceService: SourceService,
    public menuService: MenuService
  ) {
    this.menuService.onOpen.pipe(takeUntil(this.destroy)).subscribe(() => {
      if (this.router.url !== '/start') return;
      this.resetFoucs();
    });
  }

  ngAfterViewInit() {
    this.resetFoucs();
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }

  resetFoucs() {
    setTimeout(() => {
      this.options.first._elementRef.nativeElement.focus();
    }, VIEW_DELAY);
  }

  openCourse(courseId: string) {
    this.router.navigate(['/course'], { queryParams: { id: courseId } });
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
