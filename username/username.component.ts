import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UsernameService } from '../chat-page/username.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent implements OnInit {

  constructor(
    private modalCtl: ModalController,
    private navCtl: NavController,
    private us: UsernameService
  ) { }

  ngOnInit() {}

  closeUsernameModal = () => this.modalCtl.dismiss();

  usernameFormProcessor(usernameData: NgForm) {
    if (this.usernameValidator(usernameData.value.username)) {
      this.proceedToPage(usernameData.value.username);
    }
    usernameData.resetForm();
  }

  usernameValidator(username: string) {
    return username.length > 3;
  }

  proceedToPage(username: string) {
    this.modalCtl.dismiss();
    this.us.setUser();
    this.navCtl.navigateForward('/applications/chat-web-app/chat-page');
  }

}
