import { Component, Input } from "@angular/core";
import { Item } from "../../../shared/interfaces";
import { ModalService } from "../../../core/services/modal.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent {
  @Input() item!: Item;

  constructor(
    private modal: ModalService
  ) {
  }

  onDetails() {
    this.modal.toggleModal(true, "details", this.item);
  }
}
