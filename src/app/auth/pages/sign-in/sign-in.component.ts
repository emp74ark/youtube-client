import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this._createForm();
  }

  private _createForm() {
    this.form = this.fb.group({
      login: [
        "Login",
        [Validators.required, Validators.email]
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#?]).{6,64}$/)
        ]
      ]
    });
  }

  onSignIn() {
    const { login } = this.form.value;
    localStorage.setItem("user", login);
    this.authService.authenticated.next(true);
    this.authService.user.next(login);
    this.router.navigate(["/", "main"]);
  }

}
