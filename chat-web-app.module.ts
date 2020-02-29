import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatWebAppPageRoutingModule } from './chat-web-app-routing.module';

import { ChatWebAppPage } from './chat-web-app.page';
import { UsernameComponent } from './username/username.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatWebAppPageRoutingModule
  ],
  declarations: [ChatWebAppPage, UsernameComponent],
  entryComponents: [UsernameComponent]
})
export class ChatWebAppPageModule {}
