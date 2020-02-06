import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isAuthenticated: boolean = false;

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
