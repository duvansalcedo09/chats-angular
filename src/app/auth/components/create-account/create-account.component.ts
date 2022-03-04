import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.scss"],
})
export class CreateAccountComponent implements OnInit {
  @Output() redirectTo = new EventEmitter<String>();

  /** Components rounting */
  public onRedirectTo = (view: string) => this.redirectTo.emit(view);
  constructor() {}

  ngOnInit() {}
}
