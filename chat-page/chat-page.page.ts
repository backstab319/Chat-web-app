import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController, PopoverController } from '@ionic/angular';
import { UsernameService } from './username.service';
import { ChatService } from './chat.service';
import { OptionsComponent } from './options/options.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.page.html',
  styleUrls: ['./chat-page.page.scss'],
})
export class ChatPagePage implements OnInit {

  constructor(
    private toastCtl: ToastController,
    private us: UsernameService,
    private chat: ChatService,
    private popCtl: PopoverController
  ) { }
  private username: string;

  ngOnInit() {
    // Getting the username before popping the toast
    this.username = this.us.getUsername();
    this.welcomeToast();
  }

  async welcomeToast() {
    const welcomeToast = await this.toastCtl.create({
      message: 'Welcome ' + this.username,
      duration: 2000,
      color: 'primary',
      buttons: [{
        icon: 'close',
        role: 'cancel'
      }]
    });
    welcomeToast.present();
  }

  async showOptions(ev: any) {
    const options = await this.popCtl.create({
      component: OptionsComponent,
      event: ev,
      translucent: true
    });
    return await options.present();
  }

}
