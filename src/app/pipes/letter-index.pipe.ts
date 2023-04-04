import { Pipe, PipeTransform } from '@angular/core';

// refator the pipe and add a test

@Pipe({
  name: 'letterIndex',
})
export class LetterIndexPipe implements PipeTransform {
  transform(value: string): number {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.indexOf(value.toLowerCase());
    return index >= 0 ? index : 0;
  }
}
