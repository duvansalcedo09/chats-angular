import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class LoggedGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate() {
    let user = localStorage.getItem("user");
    if (!user) {
      return true;
    } else {
      this.router.navigate([""]);
      return false;
    }
  }
}
