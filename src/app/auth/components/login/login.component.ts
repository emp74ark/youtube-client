import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  authenticated = false;
  user = "";


  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.authService.authenticated.subscribe(
      value => this.authenticated = value
    );
    this.authService.user.subscribe(
      value => this.user = value
    );
  }

  onLogin() {
    this.router.navigate(["/", "signin"]);
  }

  onAdmin() {
    this.router.navigate(["/", "admin"]);
  }

}
