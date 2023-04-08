import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inCorrectFirst',
})
export class inCorrectFirstPipe implements PipeTransform {
  transform(questions: any[]): any[] {
    const correctQuestions = questions.filter(
      ({ answer, selectedValue }) => answer === selectedValue
    );
    const incorrectQuestions = questions.filter(
      ({ answer, selectedValue }) => answer !== selectedValue
    );
    return [...incorrectQuestions, ...correctQuestions];
  }
}
