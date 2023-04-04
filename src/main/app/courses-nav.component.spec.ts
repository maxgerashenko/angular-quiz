import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNavComponent } from './courses-nav.component';

describe('CoursesNavComponent', () => {
  let component: CoursesNavComponent;
  let fixture: ComponentFixture<CoursesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
