import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./services/auth.service";
import { MainService } from "./services/main.service";
import { ModalService } from "./services/modal.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [AuthService, MainService, ModalService],
})
export class CoreModule {}
