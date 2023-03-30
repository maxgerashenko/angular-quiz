import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctFirst',
})
export class correctFirstPipe implements PipeTransform {
  transform(
    questions: any[],
    externalFunction: (index: number, answer: number) => boolean
  ): any[] {
    return questions.sort((a, b) => {
      const indexA = questions.indexOf(a);
      const indexB = questions.indexOf(b);
      const isCorrectA = externalFunction(a.answer, indexA);
      const isCorrectB = externalFunction(b.answer, indexB);

      // Sort in descending order of correctness
      return isCorrectA === isCorrectB ? 0 : isCorrectA ? -1 : 1;
    });
  }
}
