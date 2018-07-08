import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validUv'
})
export class ValidUvPipe implements PipeTransform {

  transform(value: string): string {
    if (Number(value) > 50) {
      return 'NA';
    } else {
      return value;
    }
  }

}
