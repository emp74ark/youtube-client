import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "textTruncate"
})
export class TextTruncatePipe implements PipeTransform {

  transform(value: string, size: number): string {
    if (value.length <= size + 3) return value;
    return `${value.slice(0, size)}...`;
  }

}
