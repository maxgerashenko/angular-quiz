import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizListPageComponent } from './quiz-list-page.component';

describe('QuizListPageComponent', () => {
  let component: QuizListPageComponent;
  let fixture: ComponentFixture<QuizListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
