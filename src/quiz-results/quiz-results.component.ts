import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz, QuizResult, QuizService } from '../services/quiz.service';
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
  progressColor: 'primary' | 'accent';
  correctCount = this.setCorrectCount();
  total: number;
  score: number;
  messageFeedback: string;
  answers: string[];
  quiz: Quiz;
  maxScore = 0;

  constructor(
    private router: Router,
    private quizService: QuizService,
    private voiceOverService: VoiceService,
    public scoreService: ScoreService
  ) {
    this.setResults();
    this.messageFeedback = this.getFeedbackMessage();
    this.progressColor = this.scoreService.getProgressColor(this.score);
    this.scoreService.updateQuizMax(this.quiz.title, this.score);
    this.maxScore = this.scoreService.getQuizMax(this.quiz.title);
  }

  private setCorrectCount() {
    return this.quiz.questions.reduce((pre, { answer }, index) => {
      return answer === this.answers[index] ? pre + 1 : pre;
    }, 0);
  }

  private setResults() {
    const { quiz, answers } = this.quizService.getResult();
    this.quiz = quiz;
    this.answers = answers;
    this.total = quiz.questions.length;
    this.score = this.scoreService.calcScore(this.correctCount, this.total);
  }

  private getFeedbackMessage(): string {
    if (this.score >= 0.8) {
      return 'Great job!';
    } else if (this.score >= 0.5) {
      return 'Not bad, but you could do better.';
    } else {
      return 'Better luck next time!';
    }
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
    if (!this.descriptions) return;

    const messages = this.descriptions.map((el) =>
      el.nativeElement.textContent.trim()
    );
    this.voiceOverMessages(messages);
  }

  voiceOverMessages(messages) {
    this.voiceOverService.voiceOverMessages(messages);
  }
}
