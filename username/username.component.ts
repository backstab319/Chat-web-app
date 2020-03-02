import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UsernameService } from '../chat-page/username.service';
import { ChatService } from '../chat-page/chat.service';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent implements OnInit {

  constructor(
    private modalCtl: ModalController,
    private navCtl: NavController,
    private us: UsernameService,
    private chatSrv: ChatService
  ) { }
  private users: {_id: string, username: string}[];

  public usernameExists = false;

  ngOnInit() {
    this.chatSrv.getUsers();
    this.chatSrv.getUpdatedUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  closeUsernameModal = () => this.modalCtl.dismiss();

  usernameFormProcessor(usernameData: NgForm) {
    // Check if the user already exists
    if (this.checkValidUsername(usernameData.value.username)) {
      this.usernameExists = true;
      usernameData.resetForm();
      return;
    }

    // Add user and proceed to page
    if (this.usernameValidator(usernameData.value.username)) {
      this.proceedToPage(usernameData.value.username);
    } else {
      return;
    }
    usernameData.resetForm();
  }

  usernameValidator(username: string) {
    return username.length > 3;
  }

  proceedToPage(username: string) {
    this.us.setUsername(username);
    this.modalCtl.dismiss();
    this.us.setUser();
    this.navCtl.navigateForward('/applications/chat-web-app/chat-page');
  }

  checkValidUsername = (username: string) => {
    const usernames: string[] = [];
    this.users.map((n) => {
      usernames.push(n.username);
    });
    return usernames.includes(username);
  }

  // Signup page segment
  gotoSignUpPage() {
    this.modalCtl.dismiss();
    this.signUpPageModal();
  }

  async signUpPageModal() {
    const signUp = await this.modalCtl.create({
      component: SignUpComponent
    });
    return await signUp.present();
  }

}
