import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginData } from '../login-data';
import { AuthService } from '../auth/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsersDataService } from '../users-data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent implements OnInit {
  loginCredentials: LoginData = {
    username: '',
    password: '',
    isOnline: false
  };

  constructor(
    private auth: AuthService,
    private alertController: AlertController,
    private router: Router,
    private uds: UsersDataService
  ) { }

  @Output() signUp = new EventEmitter<{}>();

  ngOnInit() {}

  authenticateForm(loginData: NgForm) {
    this.loginCredentials = {
      username: loginData.value.username,
      password: loginData.value.password,
      isOnline: false
    };
    loginData.resetForm();
    if (this.uds.checkCred(this.loginCredentials)) {
      this.authSuccess();
    } else {
      this.onFailAlert();
    }
  }

  authSuccess() {
    this.auth.onLogin();
    this.router.navigateByUrl('/applications/chat-web-app/chat-page');
  }

  async onFailAlert() {
    const failAlert = await this.alertController.create({
      header: 'Login Error!',
      subHeader: 'The entered credentials are incorrect. Please try again.',
      buttons: [
        {
          text: 'Try again',
          role: 'ok'
        },
        {
          text: 'Sign up',
          handler: () => {
            this.signUp.emit();
          }
        }
      ]
    });
    await failAlert.present();
  }

}
