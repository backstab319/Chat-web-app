import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor() { }
  private UserSet = false;

  isUserSet() {
    return this.UserSet;
  }

  setUser() {
    this.UserSet = true;
  }
}
