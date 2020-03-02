import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { SignUp } from './sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  constructor(
    private modalCtl: ModalController,
    private AlertCtl: AlertController,
    private toastCtl: ToastController
  ) { }
  private signUpData: SignUp;

  ngOnInit() {}

  closeSignUpModal() {
    this.modalCtl.dismiss();
  }

  // Process user signup data
  signUpUser(signUpData: NgForm) {
    // Validate form fields
    const password1: string = signUpData.value.password1;
    const password2: string = signUpData.value.password2;
    if ((signUpData.valid && (password1.length > 3 && password2.length > 3) && (password1 === password2)) === false) {
      // Alert to check credentials
      this.checkCredentialAlert();
      return;
    }
    // Pass data to the database

    // After passing data to the database
    signUpData.resetForm();
    this.modalCtl.dismiss();
    this.successfullToast();
  }

  passwordValidator(data: NgForm) {
    const password1: string = data.value.password1;
    const password2: string = data.value.password2;
    console.log((password1.length > 3 && password2.length > 3) && (password1 === password2));
    return (password1.length > 3 && password2.length > 3) && (password1 === password2);
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

}
