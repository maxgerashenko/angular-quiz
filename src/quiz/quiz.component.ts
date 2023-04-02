import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../services/data.service';
import { MenuService } from '../services/menu.service';
import { SourceService } from '../services/source.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  quiz: Quiz;
  answers: string[] = [];
  currentQuestionIndex = 0;
  selectedOptionValue: string;
  isAutoReply = true;

  constructor(
    private readonly sourceService: SourceService,
    private router: Router,
    private route: ActivatedRoute,
    private menuService: MenuService
  ) {
    let courseId = this.route.snapshot.queryParams.courseId;
    let quizId = this.route.snapshot.queryParams.quizId;
    this.quiz = this.sourceService.getQuiz(courseId, quizId);
    this.shuffleQuestions();
    this.menuService.closeMenu();
  }

  ngOnInit(): void {}

  private shuffleQuestions(): void {
    for (let i = this.quiz.questionsList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.quiz.questionsList[i], this.quiz.questionsList[j]] = [
        this.quiz.questionsList[j],
        this.quiz.questionsList[i],
      ];
    }
  }

  toogleAutoReply(value) {
    this.isAutoReply = value;
  }

  selectOption({ value, deselect }): void {
    this.answers[this.currentQuestionIndex] = value;
    this.selectedOptionValue = value;
    if (this.isAutoReply) this.submitAnswer();
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedOptionValue = null;
    this.shuffleQuestions();
  }
  goToList() {
    this.router.navigate(['/list']);
  }

  submitAnswer(): void {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex === this.quiz.questionsList.length) {
      this.sourceService.setResult({
        quiz: this.quiz,
        answers: this.answers,
      });
      this.router.navigate(['/results']);
    }
  }
}
