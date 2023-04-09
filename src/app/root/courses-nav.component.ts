import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';
import { SourceService } from '../services/source.service';
import { MenuService } from '../services/menu.service';
import { MatSidenav } from '@angular/material/sidenav';
import {
  MatActionList,
  MatListItem,
  MatListOption,
} from '@angular/material/list';

@Component({
  selector: 'app-courses-nav',
  templateUrl: './courses-nav.component.html',
  styleUrls: ['./courses-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesNavComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @ViewChildren(MatListItem) options: QueryList<MatListItem>;

  courses = this.sourceService.getCourseTileList();

  constructor(
    private router: Router,
    private sourceService: SourceService,
    public menuService: MenuService
  ) {}

  ngAfterViewInit() {
    this.resetFoucs();
  }

  toggleMenu() {
    this.sidenav.toggle();
    if (!this.sidenav.opened) return;
    setTimeout(() => {
      this.resetFoucs();
    }, 30);
  }

  resetFoucs() {
    this.options.first._elementRef.nativeElement.focus();
  }

  openCourse(courseId: string) {
    this.router.navigate(['/course'], { queryParams: { id: courseId } });
  }
}
