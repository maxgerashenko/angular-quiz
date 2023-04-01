import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz, QuizService } from '../services/quiz.service';
import { ScoreService } from '../services/score.service';
import { VoiceService } from '../services/voice.service';

@Component({
  selector: 'quiz-results',
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss'],
})
export class QuizResultsComponent {
  @ViewChildren('description') descriptions: QueryList<
    ElementRef<HTMLTextAreaElement>
  >;

  quiz: Quiz;
  answers: string[];
  total: number;
  correctCount: number;
  score: number;
  maxScore: number;
  feedbackMessage: string;
  progressColor: 'primary' | 'accent';

  constructor(
    private router: Router,
    private quizService: QuizService,
    private voiceOverService: VoiceService,
    public scoreService: ScoreService
  ) {
    this.setQuizResults();
    this.calculateScore();
    this.setFeedbackMessage();
    this.updateQuizScore();
    this.progressColor = this.scoreService.getProgressColor(this.score);
  }

  private setQuizResults() {
    const result = this.quizService.getResult();
    this.quiz = result.quiz;
    this.answers = result.answers;
    this.total = this.quiz.questions.length;
    this.correctCount = this.quiz.questions.reduce((pre, { answer }, index) => {
      return answer === this.answers[index] ? pre + 1 : pre;
    }, 0);
    this.maxScore = this.scoreService.getQuizMax(this.quiz.title);
  }

  private calculateScore() {
    this.score = this.scoreService.calcScore(this.correctCount, this.total);
  }

  private setFeedbackMessage() {
    if (this.score >= 0.8) {
      this.feedbackMessage = 'Great job!';
    } else if (this.score >= 0.5) {
      this.feedbackMessage = 'Not bad, but you could do better';
    } else {
      this.feedbackMessage = 'Work hard!';
    }
  }

  private updateQuizScore() {
    this.scoreService.updateQuizMax(this.quiz.title, this.score);
  }

  isTopScore() {
    return this.score === 100;
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

  ngAfterViewInit() {
    if (this.descriptions) {
      const messages = this.descriptions.map((el) =>
        el.nativeElement.textContent.trim()
      );
      this.voiceOverMessages(messages);
    }
  }

  voiceOverMessages(messages) {
    this.voiceOverService.voiceOverMessages(messages);
  }
}
