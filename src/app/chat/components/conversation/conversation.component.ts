import { Component, Input, OnInit } from "@angular/core";
import { MainService } from "src/app/core/services/main.service";

@Component({
  selector: "app-conversation",
  templateUrl: "./conversation.component.html",
  styleUrls: ["./conversation.component.scss"],
})
export class ConversationComponent implements OnInit {
  arrais = [1, 1, 1, 1, 1, 1, 1, 1];
  public messages: any = [];
  public message: string = "";
  @Input() contact;

  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.getChat();
  }

  public getChat() {
    setInterval(() => {
      this.mainService
        .get({
          api: `api/message/${this.contact.userFrom}/${this.contact.userTo}`,
        })
        .subscribe((res) => {
          console.log(res);
          this.messages = res;
        });
    }, 2000);
  }

  public onSendMessage() {
    this.mainService
      .post({
        api: `api/message`,
        data: {
          from: this.contact.userFrom,
          to: this.contact.userTo,
          message: this.message,
        },
      })
      .subscribe((res) => {
        this.messages.push(res);
        this.message = "";
      });
  }
}
