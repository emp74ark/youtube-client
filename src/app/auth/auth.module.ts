import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { LoginComponent } from "./components/login/login.component";
import { RouterLink } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormValidatorPipe } from "./pipes/form-validator.pipe";
import { PasswordCheckerPipe } from "./pipes/password-checker.pipe";


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    LoginComponent,
    FormValidatorPipe,
    PasswordCheckerPipe
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  exports: [LoginComponent]
})
export class AuthModule {
}
