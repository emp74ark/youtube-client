import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authenticated = new BehaviorSubject(false);
  user = new BehaviorSubject("");

  signIn(user: string) {
    this.authenticated.next(true);
    this.user.next(user);
  }

}
