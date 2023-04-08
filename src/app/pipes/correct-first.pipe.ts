import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctFirst',
})
export class CorrectFirstPipe implements PipeTransform {
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
