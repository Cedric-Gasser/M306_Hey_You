import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HatChatPageRoutingModule } from './hat-chat-routing.module';

import { HatChatPage } from './hat-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HatChatPageRoutingModule
  ],
  declarations: [HatChatPage]
})
export class HatChatPageModule {}
