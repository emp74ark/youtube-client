import { Pipe, PipeTransform } from '@angular/core';

enum colors {
  blue= '#2F80ED',
  green = '#27AE60',
  red = '#EB5757',
  yellow = '#F2C94C',
}

@Pipe({
  name: 'dateIndicator'
})
export class DateIndicatorPipe implements PipeTransform {

  transform(date: string): string {
    const today = Date.now();
    const day = 864e5;
    const month = day * 30;
    const publishedAt = Date.parse(date);
    if ((publishedAt + day * 7) > today ) return colors.blue;
    else if ((publishedAt + month) > today ) return colors.green;
    else if ((publishedAt + month * 6) > today ) return colors.yellow;
    else return colors.red;
  }

}
