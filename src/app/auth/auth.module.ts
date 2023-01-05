import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { LoginComponent } from "./components/login/login.component";
import { RouterLink } from "@angular/router";


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [LoginComponent]
})
export class AuthModule {
}
