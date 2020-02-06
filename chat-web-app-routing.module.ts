import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatWebAppPage } from './chat-web-app.page';

const routes: Routes = [
  {
    path: '',
    component: ChatWebAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatWebAppPageRoutingModule {}
