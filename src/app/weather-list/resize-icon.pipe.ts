import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resizeIcon'
})
export class ResizeIconPipe implements PipeTransform {

  transform(value: string): string {
    return value.substring(0, 24) + '128x128' + value.substring(29, value.length);
  }

}
