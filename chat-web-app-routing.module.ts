import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatWebAppPage } from './chat-web-app.page';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ChatWebAppPage
  },
  {
    path: 'chat-page',
    loadChildren: () => import('./chat-page/chat-page.module').then( m => m.ChatPagePageModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatWebAppPageRoutingModule {}
