import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeaderLoginComponent } from "./components/header-login/header-login.component";

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HeaderLoginComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent, HeaderLoginComponent],
})
export class SharedModule {}
