import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FiltersState } from "../../shared/interfaces";

@Injectable({
  providedIn: "root"
})
export class FiltersService {
  settings = new BehaviorSubject<FiltersState>({ visibility: false, date: "asc", views: "asc", text: "" });

  toggleFilter() {
    const newState: FiltersState = {
      ...this.settings.value,
      visibility: !this.settings.value.visibility
    };
    this.settings.next(newState);
  }

  toggleDateFilter() {
    const newState: FiltersState = {
      ...this.settings.value,
      date: this.settings.value.date === "asc" ? "desc" : "asc"
    };
    this.settings.next(newState);
  }

  toggleViewsFilter() {
    const newState: FiltersState = {
      ...this.settings.value,
      views: this.settings.value.views === "asc" ? "desc" : "asc"
    };
    this.settings.next(newState);
  }

  updTextFilter(value: string) {
    const newState: FiltersState = {
      ...this.settings.value,
      text: this.settings.value.text = value
    };
    this.settings.next(newState);
  }
}
