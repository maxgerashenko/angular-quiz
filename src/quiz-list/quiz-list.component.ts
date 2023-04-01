import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService, QuizTile } from '../services/quiz.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css'],
})
export class QuizListComponent {
  course = this.quizService.getCourseQuizTile();

  constructor(
    private readonly quizService: QuizService,
    private router: Router,
    public scoreService: ScoreService
  ) {}

  openQuiz(quizId: string) {
    this.router.navigate(['/quiz'], { queryParams: { id: quizId } });
  }
}
