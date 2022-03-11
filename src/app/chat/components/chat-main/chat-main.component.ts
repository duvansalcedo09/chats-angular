import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/core/services/main.service";

@Component({
  selector: "app-chat-main",
  templateUrl: "./chat-main.component.html",
  styleUrls: ["./chat-main.component.scss"],
})
export class ChatMainComponent implements OnInit {
  public contacts: any = [];
  public chat: any = {};
  constructor(private mainService: MainService) {}

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"));
    this.mainService.get({ api: `api/contact/${user.id}` }).subscribe((res) => {
      this.contacts = res;
      this.chat = res[0] ? res[0] : {};
    });
  }

  public onSelectContact(item) {
    this.chat = item;
  }
}
