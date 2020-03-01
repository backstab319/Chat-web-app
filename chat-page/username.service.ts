import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Username } from './username';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor(
    private http: HttpClient
  ) { }
  private UserSet = false;
  private username: Username = {username: ''};

  isUserSet() {
    return this.UserSet;
  }

  setUser() {
    this.UserSet = true;
  }

  setUsername(username: string) {
    this.username.username = username;
    // Push username to database
    this.pushUsernameToDatabase();
  }

  getUsername() {
    return this.username.username;
  }

  // Pushing username to database
  pushUsernameToDatabase() {
    this.http.post<{message: string}>('http://localhost:3000/push/username', this.username)
      .subscribe(message => {
        console.log(message);
      });
  }
}
