import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "passwordChecker"
})
export class PasswordCheckerPipe implements PipeTransform {

  transform(password: string): string {
    let message: string;

    if (password.length < 8) message = "Must be great than 8 symbols";
    else if (!(/(?=.*[a-z])(?=.*[A-Z])/).test(password)) message = "must include uppercase and lowercase letters";
    else if (!(/(?=.*[0-9])/).test(password)) message = "must include letters and numbers";
    else if (!(/(?=.*[!@#?])/).test(password)) message = "must include special character";
    else message = "";

    return message;
  }

}
