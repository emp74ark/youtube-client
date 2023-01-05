import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  onSignIn(login: string) {
    this.authService.authenticated.next(true);
    this.authService.user.next(login);
    this.router.navigate(["/"]);
  }

}
