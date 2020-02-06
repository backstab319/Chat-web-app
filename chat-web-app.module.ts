import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatWebAppPageRoutingModule } from './chat-web-app-routing.module';

import { ChatWebAppPage } from './chat-web-app.page';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatWebAppPageRoutingModule
  ],
  declarations: [
    ChatWebAppPage,
    LoginComponentComponent
  ]
})
export class ChatWebAppPageModule {}
