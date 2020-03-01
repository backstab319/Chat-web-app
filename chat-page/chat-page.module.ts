import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPagePageRoutingModule } from './chat-page-routing.module';

import { ChatPagePage } from './chat-page.page';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people/people.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPagePageRoutingModule,
    HttpClientModule
  ],
  declarations: [ChatPagePage, PeopleComponent, OptionsComponent],
  entryComponents: [PeopleComponent, OptionsComponent]
})
export class ChatPagePageModule {}
