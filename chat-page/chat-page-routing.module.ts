import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPagePage } from './chat-page.page';
import { WriteGuard } from './write-page/write.guard';
import { InboxComponent } from './inbox/inbox.component';
import { InboxGuard } from './inbox/inbox.guard';

const routes: Routes = [
  {
    path: '',
    component: ChatPagePage
  },
  {
    path: 'write-page',
    loadChildren: () => import('./write-page/write-page.module').then( m => m.WritePagePageModule),
    canLoad: [WriteGuard]
  },
  {
    path: 'inbox-page',
    component: InboxComponent,
    canLoad: [InboxGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPagePageRoutingModule {}
