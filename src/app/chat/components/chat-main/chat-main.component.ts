import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/core/services/main.service";

@Component({
  selector: "app-chat-main",
  templateUrl: "./chat-main.component.html",
  styleUrls: ["./chat-main.component.scss"],
})
export class ChatMainComponent implements OnInit {
  public contacts = [
    { name: "Juan", message: "Hola", selected: true },
    { name: "David", message: "Hola", selected: false },
    { name: "Julio", message: "Hola", selected: false },
    { name: "Sebastian", message: "Hola", selected: false },
  ];
  constructor(private mainService: MainService) {}

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.mainService.get({ api: `api/contact/${user.id}` }).subscribe((res) => {
      console.log(res);
    });
  }
}
