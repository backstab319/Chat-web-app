import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WritePagePageRoutingModule } from './write-page-routing.module';

import { WritePagePage } from './write-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WritePagePageRoutingModule
  ],
  declarations: [WritePagePage]
})
export class WritePagePageModule {}
