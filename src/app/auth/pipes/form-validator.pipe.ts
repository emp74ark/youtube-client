import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formValidator"
})
export class FormValidatorPipe implements PipeTransform {

  transform(value: boolean | undefined): string | undefined {
    if (value === undefined) return;
    return value ? "#27AE60" : "#EB5757";
  }

}
