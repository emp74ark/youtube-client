import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ModalWindow, ModalWindowType } from "../../shared/interfaces";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  modalState = new BehaviorSubject<ModalWindow>({ visibility: false });

  toggleModal(visibility: boolean, type: ModalWindowType, data: any) {
    const newState: ModalWindow = {
      visibility,
      type,
      data
    };
    console.log(newState);
    this.modalState.next(newState);
  }

}
