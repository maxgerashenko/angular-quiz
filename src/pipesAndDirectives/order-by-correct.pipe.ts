import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctFirst',
})
export class correctFirstPipe implements PipeTransform {
  transform(
    questions: any[],
    isCorrect: (index: number, answer: number) => boolean,
    isInversed?: boolean
  ): any[] {
    const sorted = questions.sort((a, b) => {
      const indexA = questions.indexOf(a);
      const indexB = questions.indexOf(b);
      const isCorrectA = isCorrect(a.answer, indexA);
      const isCorrectB = isCorrect(b.answer, indexB);

      // Sort in descending order of correctness
      return isCorrectA === isCorrectB ? 0 : isCorrectA ? -1 : 1;
    });
    return isInversed ? questions.reverse() : questions;
  }
}
