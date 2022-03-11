import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @Output() redirectTo = new EventEmitter<String>();
  public user: any = {};
  /** Components rounting */
  public onRedirectTo = (view: string) => this.redirectTo.emit(view);
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  public onLogin() {
    if (this.user.email && this.user.password) {
      this.authService
        .authenticateUser({
          email: this.user.email,
          password: this.user.password,
        })
        .subscribe((response: any) => {
          if (response.success) {
            alert("Usuario logueado con exito!");
            this.authService.storeUser({ user: response.user });
            this.onRedirectTo("Chat");
          } else {
            alert(response.msg);
          }
        });
    } else {
      alert("Por favor complete todos los campos");
    }
  }
}
