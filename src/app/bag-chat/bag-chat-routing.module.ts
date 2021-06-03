import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BagChatPage } from './bag-chat.page';

const routes: Routes = [
  {
    path: '',
    component: BagChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BagChatPageRoutingModule {}
