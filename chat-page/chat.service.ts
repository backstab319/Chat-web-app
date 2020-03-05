import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UsernameService } from './username.service';
import { ServerService } from '../../server.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private http: HttpClient,
    private userSrv: UsernameService,
    private serverAddress: ServerService
  ) { }
  private usersData: any;
  private updatedUsers = new Subject<[]>();

  getUsers() {
    this.http.post(this.serverAddress.getServerAddress() + '/get/usersandid', {username: this.userSrv.getUsername()})
      .subscribe(users => {
        console.log(users);
        this.usersData = users;
        this.updatedUsers.next(this.usersData);
    });
  }

  getUpdatedUsers() {
    return this.updatedUsers.asObservable();
  }
}
