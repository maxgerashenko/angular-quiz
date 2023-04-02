import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { QuizListComponent } from './quiz-list.component';
import { ScoreService } from '../services/score.service';
import { SourceService } from '../services/source.service';
import { MenuService } from '../services/menu.service';
import { Course } from '../services/data.service.types';
import { of } from 'rxjs';
import { AlphabetLetterPipe } from '../pipesAndDirectives/letter.pipe';

describe('QuizListComponent', () => {
  let component: QuizListComponent;
  let fixture: ComponentFixture<QuizListComponent>;
  let router: Router;
  let route: ActivatedRoute;
  let sourceService: SourceService;
  let scoreService: ScoreService;
  let menuService: MenuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizListComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParams: {
                id: 'courseId',
              },
            },
          },
        },
        {
          provide: Router,
          useValue: {
            events: of(
              new NavigationEnd(
                0,
                'http://localhost:4200/quiz',
                'http://localhost:4200/quiz'
              )
            ),
            navigate: jasmine.createSpy('navigate'),
          },
        },
        SourceService,
        ScoreService,
        MenuService,
        AlphabetLetterPipe,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    sourceService = TestBed.inject(SourceService);
    scoreService = TestBed.inject(ScoreService);
    menuService = TestBed.inject(MenuService);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should subscribe to router events', () => {
      spyOn(router.events, 'pipe').and.callThrough();
      component.ngOnInit();
      expect(router.events.pipe).toHaveBeenCalled();
    });
  });

  describe('updateCourse', () => {
    it('should update course with course from sourceService', () => {
      spyOn(sourceService, 'getCourse').and.returnValue({} as Course);
      component.updateCourse();
      expect(sourceService.getCourse).toHaveBeenCalled();
    });
  });

  describe('openQuiz', () => {
    it('should navigate to quiz with courseId and quizId in queryParams', () => {
      component.openQuiz('courseId', 'quizId');
      expect(router.navigate).toHaveBeenCalledWith(['/quiz'], {
        queryParams: { courseId: 'courseId', quizId: 'quizId' },
      });
    });
  });

  describe('ngOnDestroy', () => {
    it('should call unsubscribe method', () => {
      spyOn(component.destroy, 'next').and.callThrough();
      spyOn(component.destroy, 'complete').and.callThrough();
      component.ngOnDestroy();
      expect(component.destroy.next).toHaveBeenCalledWith(null);
      expect(component.destroy.complete).toHaveBeenCalled();
    });
  });
});
