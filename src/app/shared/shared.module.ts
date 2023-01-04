import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TextTruncatePipe } from "./pipes/text-truncate.pipe";


@NgModule({
  declarations: [
    TextTruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextTruncatePipe
  ]
})
export class SharedModule {
}
