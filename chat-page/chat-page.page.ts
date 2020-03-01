import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { UsernameService } from './username.service';
import { ChatService } from './chat.service';
import { PeopleComponent } from './people/people.component';

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
    private modal: ModalController
  ) { }
  private username: string;

  ngOnInit() {
    // Getting the username before popping the toast
    this.username = this.us.getUsername();
    this.welcomeToast();
  }

  async welcomeToast() {
    const welcomeToast = await this.toastCtl.create({
      message: 'Sign up successfull! ' + 'Welcome ' + this.username,
      duration: 2000,
      color: 'primary',
      buttons: [{
        icon: 'close',
        role: 'cancel'
      }]
    });
    welcomeToast.present();
  }

  async showPeopleModal() {
    const peopleModal = await this.modal.create({
      component: PeopleComponent
    });
    return await peopleModal.present();
  }

}
