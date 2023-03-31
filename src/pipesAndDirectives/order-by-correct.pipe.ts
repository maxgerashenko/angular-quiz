import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctFirst',
})
export class correctFirstPipe implements PipeTransform {
  transform(questions: any[], answers: string[], isInversed?: boolean): any[] {
    const updated = questions.map((el, index) => ({
      ...el,
      selected: answers[index],
    }));
    const sorted = [
      ...updated.filter(({ answer, selected }) => answer === selected),
      ...updated.filter(({ answer, selected }) => answer !== selected),
    ];
    return isInversed ? sorted.reverse() : sorted;
  }
}
