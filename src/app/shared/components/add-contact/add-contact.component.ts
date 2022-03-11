import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { MainService } from "src/app/core/services/main.service";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.scss"],
})
export class AddContactComponent implements OnInit {
  @Output() close = new EventEmitter<String>();
  public contact: any = {};
  /** Components rounting */
  public onClose = (view: string) => this.close.emit(view);

  constructor(private mainService: MainService) {}

  ngOnInit() {}
  // satiango@test.com
  public onAddContact() {
    this.contact.userFrom = JSON.parse(localStorage.getItem("user"))["id"];
    this.mainService.post({ api: `api/contact`, data: this.contact }).subscribe(
      (res) => {
        if (res.success) {
          alert("Usuario creado con exito!");
          this.close.emit();
        } else {
          alert(res.msg);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
