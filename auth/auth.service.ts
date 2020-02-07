import { Injectable } from '@angular/core';

type NewType = boolean;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isAuthenticated: NewType = false;

  getAuthStatus() {
    return this.isAuthenticated;
  }

  onLogin() {
    this.isAuthenticated = !this.isAuthenticated;
  }

  onLogout() {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
