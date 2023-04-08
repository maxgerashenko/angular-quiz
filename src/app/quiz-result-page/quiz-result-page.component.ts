import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { QuizResult, ScoreService } from '../services/score.service';
import { VoiceService } from '../services/voice.service';
import { QuestionWithResult, Quiz } from '../services/interfaces';
import { assert, castExists } from '../utils';
import { Question } from '../services/interfaces';

export type sortedQuestion = Question & { selected: string };

@Component({
  templateUrl: './quiz-result-page.component.html',
  styleUrls: ['./quiz-result-page.component.scss'],
})
export class QuizResultPageComponent {
  @ViewChildren('description') descriptions!: QueryList<
    ElementRef<HTMLTextAreaElement>
  >;
  progressColor: 'primary' | 'accent';
  score: number;
  total: number;
  feedbackMessage: string;
  questions: QuestionWithResult[];
  correctCount: number;
  maxScore = 0;
  quizResult: QuizResult;

  constructor(
    private router: Router,
    private voiceOverService: VoiceService,
    public scoreService: ScoreService
  ) {
    this.quizResult = castExists(
      this.scoreService.getResult(),
      'result is not set'
    )!;
    this.questions = this.quizResult.questions;
    this.total = this.questions.length;
    this.correctCount = this.questions.filter(
      ({ selectedValue, answer }) => selectedValue === answer
    ).length;
    this.score = Math.trunc((this.correctCount / this.total) * 100);
    this.feedbackMessage = this.getFeedbackMessage();
    this.progressColor = this.scoreService.getProgressColor(this.score);

    this.scoreService.updateQuizMax(this.quizResult.quizTitle, this.score);
    this.maxScore = this.scoreService.getQuizMax(this.quizResult.quizTitle);
  }

  trackQuestion(index: number, question: Question) {
    return question?.title;
  }

  isTopScore() {
    return this.score === 100;
  }

  goToList() {
    this.router.navigate(['/start'], {
      queryParams: { id: this.quizResult.courseId },
    });
  }

  reset() {
    this.router.navigate(['/quiz'], {
      queryParams: {
        courseId: this.quizResult.courseId,
        quizId: this.quizResult.quizId,
      },
    });
  }

  getFeedbackMessage(): string {
    if (this.scoreService.hasPass(this.score)) {
      return 'Great job!';
    } else if (this.scoreService.hasAlmostPass(this.score)) {
      return 'Not bad, but you could do better.';
    } else {
      return 'Better luck next time!';
    }
  }

  ngAfterViewInit() {
    assert(this.descriptions, 'descriptions is not on the page');
    if (!this.descriptions) return;

    const messages = this.descriptions.map((el) =>
      el.nativeElement.textContent!.trim()
    );
    this.voiceOverMessages(messages);
  }

  voiceOverMessages(messages: string[]) {
    this.voiceOverService.voiceOverMessages(messages);
  }

  ngOnDestroy() {
    this.voiceOverService.stop();
  }
}
