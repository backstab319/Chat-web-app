import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { UsernameComponent } from './username/username.component';

@Component({
  selector: 'app-chat-web-app',
  templateUrl: './chat-web-app.page.html',
  styleUrls: ['./chat-web-app.page.scss'],
})
export class ChatWebAppPage implements OnInit {

  constructor(
    private alertCtl: AlertController,
    private modalCtl: ModalController
  ) { }

  ngOnInit() {
    this.presentWarning();
  }

  async presentWarning() {
    const warning = await this.alertCtl.create({
      header: 'Security warning!',
      subHeader: 'Please do not use any username or password that you are using currently anywhere else',
      buttons: [{
        text: 'Ok',
        role: 'ok'
      }]
    });
    await warning.present();
  }

  async presentUsernameModal() {
    const username = await this.modalCtl.create({
      component: UsernameComponent
    });
    return await username.present();
  }

}
