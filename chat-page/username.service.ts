import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Username } from './username';
import { SignUp } from '../sign-up/sign-up';
import { ServerService } from '../../server.service';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor(
    private http: HttpClient,
    private serverAddress: ServerService
  ) { }
  private UserSet = false;
  private username: Username = {username: ''};
  public stat: string;
  private takenUsernames: string[];

  // Authentication of login data
  authLoginData(data: SignUp) {
    // const auth = this.http.post<{message: string, status: string}>('http://localhost:3000/auth/user', data)
    //   .subscribe(response => {
    //     if (response.status === 'exist&&passcorrect') {
    //       this.onCorrectCred(response.message, data.username, response.status);
    //     } else {
    //       this.onIncorrectCred(response.message, response.status);
    //     }
    //   },
    //   error => {
    //     console.log('Error');
    //   },
    //   () => {
    //     console.log(this.stat);
    //   });
    // return auth;
    return this.http.post<{message: string, status: string}>(this.serverAddress.getServerAddress() + '/auth/user', data);
  }

  onCorrectCred(message: string, username: string, status: string) {
    this.setUsername(username);
    console.log(message);
    this.stat = status;
    console.log(this.stat);
  }

  onIncorrectCred(message: string, status: string) {
    console.log(message);
    this.stat = status;
  }

  isUserSet() {
    return this.UserSet;
  }

  setUser() {
    this.UserSet = true;
  }

  setUsername(username: string) {
    this.username.username = username;
    this.setUser();
  }

  getUsername() {
    return this.username.username;
  }

  // Pushing username and password to the database
  signUpUser(data: SignUp) {
    this.pushUsernameToDatabase(data);
  }

  pushUsernameToDatabase(signUpData: SignUp) {
    this.http.post<{message: string}>(this.serverAddress.getServerAddress() + '/push/username', signUpData)
      .subscribe(message => {
        console.log(message);
      });
  }

  getTakenUsernames = () => {
    return this.http.get(this.serverAddress.getServerAddress() + '/get/users');
  }
}
