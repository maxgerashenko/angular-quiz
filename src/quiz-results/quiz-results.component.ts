import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz, QuizResult, QuizService } from '../services/quiz.service';
import { ScoreService } from '../services/score.service';

@Component({
  selector: 'quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss'],
})
export class QuizResultsComponent {
  progressColor: 'primary' | 'accent';
  score: number;
  total: number;
  message: string;
  answers: string[];
  quiz: Quiz;
  numCorrect: number;
  maxScore = 0;

  constructor(
    private router: Router,
    private quizService: QuizService,
    public scoreService: ScoreService
  ) {
    this.flatResults(this.quizService.getResult());
    this.numCorrect = this.quiz.questions.reduce((pre, { answer }, index) => {
      return answer === this.answers[index] ? pre + 1 : pre;
    }, 0);
    this.score = (this.numCorrect / this.total) * 100;
    this.message = this.getFeedbackMessage();
    this.progressColor = this.scoreService.getProgressColor(this.score);

    this.scoreService.updateQuizMax(this.quiz.title, this.score);
    this.maxScore = this.scoreService.getQuizMax(this.quiz.title);
  }

  flatResults({ quiz, answers }: QuizResult) {
    this.quiz = quiz;
    this.answers = answers;
    this.total = quiz.questions.length;
  }

  isRelevant(question, optionLetter) {
    return (
      optionLetter === question.selected || optionLetter === question.answer
    );
  }

  isCorrect(question, optionLetter) {
    return (
      (question.selected === optionLetter &&
        question.selected === question.answer) ||
      optionLetter === question.answer
    );
  }

  isInCorrect(question, optionLetter) {
    return (
      question.selected === optionLetter &&
      question.selected !== question.answer
    );
  }

  goToList() {
    this.router.navigate(['/list']);
  }

  reset() {
    this.router.navigate(['/quiz'], {
      queryParams: { id: String(this.quiz.id) },
    });
  }

  getFeedbackMessage(): string {
    if (this.score >= 0.8) {
      return 'Great job!';
    } else if (this.score >= 0.5) {
      return 'Not bad, but you could do better.';
    } else {
      return 'Better luck next time!';
    }
  }
}
