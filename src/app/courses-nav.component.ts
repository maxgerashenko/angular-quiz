import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SourceService } from '../services/source.service';

@Component({
  selector: 'courses-nav',
  templateUrl: './courses-nav.component.html',
  styleUrls: ['./courses-nav.component.scss'],
})
export class CoursesNavComponent implements OnInit {
  courses = this.sourceService.getCourseTileList();

  constructor(private router: Router, private sourceService: SourceService) {}
  ngOnInit() {}

  openCourse(courseId: string) {
    this.router.navigate(['/course'], { queryParams: { id: courseId } });
  }
}
