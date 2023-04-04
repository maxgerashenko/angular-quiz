import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'correctFirst',
})
export class CorrectFirstPipe implements PipeTransform {
  transform(questions: any[], answers: string[], isInversed?: boolean): any[] {
    const updatedQuestions = questions.map((question, index) => ({
      ...question,
      selected: answers[index],
    }));
    const correctQuestions = updatedQuestions.filter(
      ({ answer, selected }) => answer === selected
    );
    const incorrectQuestions = updatedQuestions.filter(
      ({ answer, selected }) => answer !== selected
    );
    const sortedQuestions = [...correctQuestions, ...incorrectQuestions];
    return isInversed ? sortedQuestions.reverse() : sortedQuestions;
  }
}