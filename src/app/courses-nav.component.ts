import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { SourceService } from '../services/source.service';

@Component({
  selector: 'courses-nav',
  templateUrl: './courses-nav.component.html',
  styleUrls: ['./courses-nav.component.scss'],
})
export class CoursesNavComponent {
  courses = this.sourceService.getCourseTileList();

  constructor(
    private router: Router,
    private sourceService: SourceService,
    public menuService: MenuService
  ) {}

  openCourse(courseId: string) {
    this.router.navigate(['/course'], { queryParams: { id: courseId } });
  }
}
