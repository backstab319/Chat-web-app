import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UsernameService } from '../chat-page/username.service';
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
    private toastCtl: ToastController
  ) { }
  private users: {_id: string, username: string}[];

  public usernameExists = false;
  private authStat = false;

  ngOnInit() {}

  closeUsernameModal = () => this.modalCtl.dismiss();

  usernameFormProcessor(usernameData: NgForm) {
    // // Check if the user already exists
    // if (this.checkValidUsername(usernameData.value.username)) {
    //   this.usernameExists = true;
    //   usernameData.resetForm();
    //   return;
    // }

    // // Add user and proceed to page
    // if (this.usernameValidator(usernameData.value.username)) {
    //   this.proceedToPage(usernameData.value.username);
    // } else {
    //   return;
    // }

    if (usernameData.invalid) {
      return;
    }

    const usr = usernameData.value.username;
    const pass = usernameData.value.password;

    this.us.authLoginData({
      username: usr,
      password: pass
    }).subscribe(response => {
      if (response.status === 'exist&&passcorrect') {
        this.us.onCorrectCred(response.message, usr, response.status);
      } else {
        this.us.onIncorrectCred(response.message, response.status);
      }
    },
    error => {
      console.log('There was some error authenticating', error);
    },
    () => {
      // Proceed accordingly
      if (this.us.stat !== 'exist&&passcorrect') {
        this.wrongCredToast();
      } else {
        this.proceedToPage(usr);
      }
    });

    usernameData.resetForm();
  }

  proceedToPage(username: string) {
    this.us.setUsername(username);
    this.modalCtl.dismiss();
    this.us.setUser();
    this.navCtl.navigateForward('/applications/chat-web-app/chat-page');
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

  async wrongCredToast() {
    const wrongCredToast = await this.toastCtl.create({
      message: 'Incorrect user credentials. Please check your user name and password and try again',
      duration: 2000,
      color: 'danger',
      translucent: true
    });
    wrongCredToast.present();
  }

}
