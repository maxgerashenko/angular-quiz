import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inCorrectFirst',
})
export class inCorrectFirstPipe implements PipeTransform {
  transform(questions: any[]): any[] {
    const correctQuestions = questions.filter(
      ({ answer, selected }) => answer === selected
    );
    const incorrectQuestions = questions.filter(
      ({ answer, selected }) => answer !== selected
    );
    return [...correctQuestions, ...incorrectQuestions];
  }
}
