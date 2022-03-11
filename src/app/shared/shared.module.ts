import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeaderLoginComponent } from "./components/header-login/header-login.component";
import { AddContactComponent } from "./components/add-contact/add-contact.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderLoginComponent,
    AddContactComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    HeaderLoginComponent,
    AddContactComponent,
  ],
})
export class SharedModule {}
