import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz } from '../services/source.service';
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
    private route: ActivatedRoute
  ) {
    let quizId = this.route.snapshot.queryParams.id;
    this.quiz = this.sourceService.getQuiz(quizId);
    this.shuffleQuestions();
  }

  ngOnInit(): void {}

  private shuffleQuestions(): void {
    for (let i = this.quiz.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.quiz.questions[i], this.quiz.questions[j]] = [
        this.quiz.questions[j],
        this.quiz.questions[i],
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
    if (this.currentQuestionIndex === this.quiz.questions.length) {
      this.sourceService.setResult({
        quiz: this.quiz,
        answers: this.answers,
      });
      this.router.navigate(['/results']);
    }
  }
}
