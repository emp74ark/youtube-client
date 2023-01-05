import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { UfoComponent } from "./pages/ufo/ufo.component";
import { YoutubeModule } from "../youtube/youtube.module";
import { AuthModule } from "../auth/auth.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UfoComponent
  ],
  imports: [
    CommonModule,
    YoutubeModule,
    AuthModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {
}
