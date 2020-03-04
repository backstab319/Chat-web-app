import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { SignUp } from './sign-up';
import { UsernameService } from '../chat-page/username.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(
    private modalCtl: ModalController,
    private AlertCtl: AlertController,
    private toastCtl: ToastController,
    private userSrv: UsernameService
  ) { }
  private signUpData: SignUp;
  private usernameTaken: boolean;

  ngOnInit() {}

  closeSignUpModal() {
    this.modalCtl.dismiss();
  }

  // Process user signup data
  async signUpUser(signUpData: NgForm) {
    // Check if username is available
    await this.isUsernameAvailable(signUpData.value.username);
    if (this.usernameTaken) {
      console.log('The username is already taken!');
      return;
    }
    // Validate form fields
    const pass1: string = signUpData.value.password1;
    const pass2: string = signUpData.value.password2;
    if ((signUpData.valid && (pass1.length > 3 && pass2.length > 3) && (pass1 === pass2)) === false) {
      // Alert to check credentials
      this.checkCredentialAlert();
      return;
    }
    // Pass data to the database
    this.signUpData = {
      username: signUpData.value.username,
      password: signUpData.value.password1
    };
    this.userSrv.signUpUser(this.signUpData);
    // After passing data to the database
    signUpData.resetForm();
    this.modalCtl.dismiss();
    this.successfullToast();
  }

  async checkCredentialAlert() {
    const checkCred = await this.AlertCtl.create({
      header: 'Error',
      subHeader: 'Please check your credentials',
      buttons: [{
        text: 'Ok',
        role: 'ok'
      }],
      translucent: true
    });
    return await checkCred.present();
  }

  async successfullToast() {
    const success = await this.toastCtl.create({
      message: 'Sign up successfull! Now you can login to start chatting!',
      color: 'primary',
      duration: 2000
    });
    success.present();
  }

  async isUsernameAvailable(username: string) {
    // Fetch taken usernames
    this.userSrv.getTakenUsernames().subscribe(taken => {
      this.usernameTaken = taken.toString().split(',').includes(username);
    }, error => console.log('Some error occured while fetching usernames', error));
    return this.usernameTaken;
  }

}
