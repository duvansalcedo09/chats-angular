import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @Output() redirectTo = new EventEmitter<String>();

  /** Components rounting */
  public onRedirectTo = (view: string) => this.redirectTo.emit(view);
  constructor() {}

  ngOnInit() {}
}
