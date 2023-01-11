import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this._createForm();
  }

  private _createForm() {
    this.form = this.fb.group({
      name: ["User name", [Validators.required, Validators.minLength(2)]],
      surname: ["User surname", [Validators.required, Validators.minLength(2)]],
      mail: ["user@ma.il", [Validators.required, Validators.email]],
      password: [
        null, [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#?]).{6,64}$/)
        ]
      ]
    });
  }

  onsignUp() {
    const { name, surname, mail, password } = this.form.value;
    console.log("name: ", name, "surname: ", surname, "mail: ", mail, "password: ", password);
  }
}
