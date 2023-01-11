import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./youtube/pages/main/main.component";
import { UfoComponent } from "./core/pages/ufo/ufo.component";
import { SignInComponent } from "./auth/pages/sign-in/sign-in.component";
import { SignUpComponent } from "./auth/pages/sign-up/sign-up.component";
import { HomeComponent } from "./core/pages/home/home.component";
import { AuthGuard } from "./core/guards/auth.guard";
import { AdminComponent } from "./auth/pages/admin/admin.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "main", component: MainComponent, canActivate: [AuthGuard] },
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "**", component: UfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
