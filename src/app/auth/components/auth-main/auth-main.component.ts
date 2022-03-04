import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth-main",
  templateUrl: "./auth-main.component.html",
  styleUrls: ["./auth-main.component.scss"],
})
export class AuthMainComponent implements OnInit {
  public view: string = "Login"; //Login, Create Account
  constructor(private router: Router) {}

  ngOnInit() {}

  public changeView(view) {
    if (view == "Chat") this.router.navigate(["/chat"]);
    else this.view = view;
  }
}
