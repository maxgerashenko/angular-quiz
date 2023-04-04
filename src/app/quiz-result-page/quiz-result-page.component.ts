import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../services/score.service';
import { VoiceService } from '../services/voice.service';
import { QuizResult, Quiz } from '../services/interfaces';
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
  answers: string[];
  quiz: Quiz;
  correctCount: number;
  maxScore = 0;

  constructor(
    private router: Router,
    private voiceOverService: VoiceService,
    public scoreService: ScoreService,
  ) {
    const {quiz, answers} = castExists(this.scoreService.getResult(), 'result is not set')!;
    this.quiz = quiz;
    this.answers = answers;
    this.total = quiz.questionsList.length;
    this.correctCount = this.quiz.questionsList.reduce(
      (pre, { answer }, index) => {
        return answer === this.answers[index] ? pre + 1 : pre;
      },
      0
    );
    this.score = Math.trunc((this.correctCount / this.total) * 100);
    this.feedbackMessage = this.getFeedbackMessage();
    this.progressColor = this.scoreService.getProgressColor(this.score);

    this.scoreService.updateQuizMax(this.quiz.title, this.score);
    this.maxScore = this.scoreService.getQuizMax(this.quiz.title);
  }

  ngOnViewInit() {  
    assert(this.descriptions, 'descriptions is not on the page');
  }

  trackQuestion(index: number, question: Question) {
    return question?.title;
  }

  isTopScore() {
    return this.score === 100;
  }

  flatResults({ quiz, answers }: QuizResult) {
    
  }

  isRelevant(question: sortedQuestion, optionLetter:string): boolean {
    return (
      optionLetter === question.selected || optionLetter === question.answer
    );
  }

  isCorrect(question: sortedQuestion, optionLetter:string): boolean {
    return (
      (question.selected === optionLetter &&
        question.selected === question.answer) ||
      optionLetter === question.answer
    );
  }

  isInCorrect(question: sortedQuestion, optionLetter:string): boolean {
    return (
      question.selected === optionLetter &&
      question.selected !== question.answer
    );
  }

  goToList() {
    this.router.navigate(['/start'], {
      queryParams: { id: this.quiz.courseId },
    });
  }

  reset() {
    this.router.navigate(['/quiz'], {
      queryParams: {
        courseId: this.quiz.courseId,
        quizId: this.quiz.id,
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
    if (!this.descriptions) return;

    const messages = this.descriptions.map((el) =>
      el.nativeElement.textContent!.trim()
    );
    this.voiceOverMessages(messages);
  }

  voiceOverMessages(messages:string[]) {
    this.voiceOverService.voiceOverMessages(messages);
  }

  ngOnDestroy() {
    this.voiceOverService.stop();
  }
}
