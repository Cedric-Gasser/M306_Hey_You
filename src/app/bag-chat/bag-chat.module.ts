import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BagChatPageRoutingModule } from './bag-chat-routing.module';

import { BagChatPage } from './bag-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BagChatPageRoutingModule
  ],
  declarations: [BagChatPage]
})
export class BagChatPageModule {}
