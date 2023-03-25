import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'array',
})
export class ArrayPipe implements PipeTransform {
  transform(input: Array<any>, sep = ','): string {
    return input.join(sep);
  }
}
