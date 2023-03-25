import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService, QuizTile } from '../services/quiz.service';

interface Quiz {
  id: number;
  title: string;
}

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css'],
})
export class QuizListComponent {
  quizTiles: QuizTile[] = this.quizService.getQuizTilesList();

  constructor(
    private readonly quizService: QuizService,
    private router: Router
  ) {}

  openQuiz(quizId: string) {
    this.router.navigate(['/quiz'], { queryParams: { id: quizId } });
  }
}
