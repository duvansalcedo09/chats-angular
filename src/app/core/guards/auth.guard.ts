import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}

  canActivate() {
    let user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      this.router.navigate(["/authentication"]);
      return false;
    }
  }
}
