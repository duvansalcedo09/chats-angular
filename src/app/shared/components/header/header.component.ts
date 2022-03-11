import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { ModalService } from "src/app/core/services/modal.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  dropDown = false;
  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnInit() {}

  public onLogOut() {
    this.authService.logout();
  }

  public onAddContact() {
    this.modalService.openModal({
      modal: "Add contact",
    });
  }
}
