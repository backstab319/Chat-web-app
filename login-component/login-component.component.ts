import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginData } from '../login-data';
import { AuthService } from '../auth/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  loginCredentials: LoginData = {
    username: '',
    password: ''
  };

  constructor(
    private auth: AuthService,
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  authenticateForm(loginData: NgForm) {
    console.log(this.loginCredentials = {
      username: loginData.value.username,
      password: loginData.value.password
    });
    this.authSuccess();
    loginData.resetForm();
  }

  authSuccess() {
    this.auth.onLogin();
  }

  async onFailAlert() {
    const failAlert = await this.alertController.create({
      header: 'Login Error!',
      subHeader: 'The entered credentials are incorrect. Please try again.',
      buttons: [
        {
          text: 'Ok',
          role: 'ok'
        }
      ]
    });
    await failAlert.present();
  }

}
