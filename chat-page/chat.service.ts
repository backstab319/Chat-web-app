import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient
  ) { }
  private usersData: any;
  private updatedUsers = new Subject<[]>();

  getUsers() {
    this.http.get('http://localhost:3000/get/users')
      .subscribe(users => {
        this.usersData = users;
        this.updatedUsers.next(this.usersData);
    });
  }

  getUpdatedUsers() {
    return this.updatedUsers.asObservable();
  }
}
