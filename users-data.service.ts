import { Injectable } from '@angular/core';
import { UsersData } from './users-data';
import { Subject } from 'rxjs';
import { LoginData } from './login-data';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  private users: UsersData[] = [];
  private getUpdatedUsers = new Subject<UsersData[]>();

  constructor() { }

  // Pass the users array that contains users data
  getUsers = () => [...this.users];

  // Put new users data into the users array
  putUsers = (data: UsersData) => {
    this.users.push(data);
    this.getUpdatedUsers.next([...this.users]);
  }

  // Pass updated array of users data
  getUpdated = () => this.getUpdatedUsers.asObservable();

  // Check login cred
  checkCred = (data: LoginData) => this.users.filter((val) => val.userName === data.username && val.password === data.password).length > 0;
}
