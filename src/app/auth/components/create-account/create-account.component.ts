import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.component.html",
  styleUrls: ["./create-account.component.scss"],
})
export class CreateAccountComponent implements OnInit {
  @Output() redirectTo = new EventEmitter<String>();
  public user: any = {};
  /** Components rounting */
  public onRedirectTo = (view: string) => this.redirectTo.emit(view);
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  public onRegister() {
    if (this.user.password == this.user.repeatPassword) {
      this.authService
        .register({
          email: this.user.email,
          password: this.user.password,
          name: this.user.name,
        })
        .subscribe((response: any) => {
          if (response.success) {
            alert("Usuario creado con exito!");
            this.onRedirectTo("Login");
          } else {
            alert("Error al crear usuario, contecte con soporte");
          }
        });
    } else {
      alert("Las contraseñas no coinciden");
    }
  }
}
