import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../../core/services/modal.service";
import { Item } from "../../../shared/interfaces";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {

  detailsVisibility = true;
  content!: Item;

  constructor(
    private modal: ModalService
  ) {
  }

  ngOnInit() {
    this.modal.modalState.subscribe(
      state => {
        this.detailsVisibility = state.visibility;
        this.content = state.data;
      }
    );
  }

  onClose() {
    this.modal.toggleModal(false, "details", null);
  }

}
