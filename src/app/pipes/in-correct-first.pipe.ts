import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inCorrectFirst',
})
export class inCorrectFirstPipe implements PipeTransform {
  transform(items: any[], answer?, selectedValue?): any[] {
    if (typeof items[0] === 'string') {
      if (selectedValue === answer) return items;
      const incorrectOption = items.filter(
        (option, index) => this.indexToLetter(index) == selectedValue
      );
      const correctOption = items.filter(
        (option, index) => this.indexToLetter(index) === answer
      );
      const rest = items.filter((option, index) => {
        const letter = this.indexToLetter(index);
        return letter !== answer && letter !== selectedValue;
      });
      return [...incorrectOption, ...correctOption, ...rest];
    }

    const incorrectQuestions = items.filter(
      ({ answer, selectedValue }) => answer !== selectedValue
    );
    const correctQuestions = items.filter(
      ({ answer, selectedValue }) => answer === selectedValue
    );
    return [...incorrectQuestions, ...correctQuestions];
  }

  private indexToLetter(index: number): string {
    return String.fromCharCode(97 + index);
  }
}
