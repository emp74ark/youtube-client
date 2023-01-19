import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { State } from "../../../redux/state.model";
import { Store } from "@ngrx/store";
import { addNewCard } from "../../../redux/actions/card.actions";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<State>,
    private router: Router
  ) {
  }

  ngOnInit() {
    this._createForm();
  }

  private _createForm() {
    this.form = this.fb.group({
      title: ["Title", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: [null, [Validators.maxLength(255)]],
      img: [null, [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/)]],
      video: [null, [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/)]],
      date: [null, [Validators.required]]
    });
  }

  onCreate() {
    this.store.dispatch(addNewCard({ payload: this.form.value }));
    this.router.navigate(["/"]);
  }
}
