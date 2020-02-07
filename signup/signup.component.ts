import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UsersDataService } from '../users-data.service';
import { UsersData } from '../users-data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  usersData: UsersData = {
    userName: '',
    password: '',
    isAuthenticated: false
  };
  signupSuccess = false;

  constructor(
    private modal: ModalController,
    private uds: UsersDataService
  ) { }

  ngOnInit() {}

  dismissSignUp() {
    this.modal.dismiss({
      success: this.signupSuccess
    });
  }

  signupForm(signupData: NgForm) {
    this.uds.putUsers(this.usersData = {
      userName: signupData.value.username,
      password: signupData.value.password1,
      isAuthenticated: false
    });
    signupData.resetForm();
    this.signupSuccess = true;
    this.dismissSignUp();
  }

}
