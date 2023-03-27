import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabetIndex',
})
export class AlphabetIndexPipe implements PipeTransform {
  transform(value: string): number {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.indexOf(value.toLowerCase());
    return index >= 0 ? index : 0;
  }
}
