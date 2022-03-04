import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { AuthMainComponent } from "./components/auth-main/auth-main.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CreateAccountComponent } from "./components/create-account/create-account.component";

@NgModule({
  declarations: [LoginComponent, AuthMainComponent, CreateAccountComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, FormsModule],
})
export class AuthModule {}
