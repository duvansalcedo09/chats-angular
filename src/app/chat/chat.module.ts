import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChatRoutingModule } from "./chat-routing.module";
import { ChatMainComponent } from "./components/chat-main/chat-main.component";
import { ConversationComponent } from "./components/conversation/conversation.component";
import { ContactsComponent } from "./components/contacts/contacts.component";

@NgModule({
  declarations: [ChatMainComponent, ConversationComponent, ContactsComponent],
  imports: [CommonModule, ChatRoutingModule],
})
export class ChatModule {}
