import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./youtube/pages/main/main.component";
import { UfoComponent } from "./core/pages/ufo/ufo.component";
import { SignInComponent } from "./auth/pages/sign-in/sign-in.component";
import { SignUpComponent } from "./auth/pages/sign-up/sign-up.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "**", component: UfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
