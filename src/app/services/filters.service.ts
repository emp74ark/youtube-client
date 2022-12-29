import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FiltersService {
  settings = new BehaviorSubject({ visibility: false });

  toggleFilter() {
    this.settings.next({ ...this.settings, visibility: !this.settings.value.visibility });
  }
}
