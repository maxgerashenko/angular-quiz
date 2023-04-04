import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultPageComponent } from './quiz-result-page.component';

describe('QuizResultPageComponent', () => {
  let component: QuizResultPageComponent;
  let fixture: ComponentFixture<QuizResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizResultPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
