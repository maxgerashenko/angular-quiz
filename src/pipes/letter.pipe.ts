import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetLetter',
})
export class AlphabetLetterPipe implements PipeTransform {
  transform(value: number): string {
    return String.fromCharCode(value + 97);
  }
}
