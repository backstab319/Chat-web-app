import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-chat-web-app',
  templateUrl: './chat-web-app.page.html',
  styleUrls: ['./chat-web-app.page.scss'],
})
export class ChatWebAppPage implements OnInit {

  constructor(
    private modal: ModalController,
    private toast: ToastController
    ) { }

  ngOnInit() {
  }

  async signupModal() {
    const signup = await this.modal.create({
      component: SignupComponent
    });
    signup.onDidDismiss()
      .then((data) => {
        if (data.data.success) {
          this.myToast();
        }
      });
    return await signup.present();
  }

  async myToast() {
    const toastSuccess = await this.toast.create({
      message: 'Sign up successfull',
      duration: 2000,
      color: 'primary'
    });
    await toastSuccess.present();
  }

  initiateSignUp() {
    this.signupModal();
  }

}
