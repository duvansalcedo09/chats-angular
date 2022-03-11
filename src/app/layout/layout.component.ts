import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ModalService } from "../core/services/modal.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  public modalDisplay: string = "Add contact"; // Hide, Add contact
  public subscribeModal$: Subscription;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.subscribeModal$ = this.modalService.modal.subscribe((output: any) => {
      this.modalDisplay = output.modal ? output.modal : "Hide";
    });
  }
}
