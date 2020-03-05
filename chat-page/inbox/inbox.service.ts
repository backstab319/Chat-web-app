import { Injectable } from '@angular/core';
import { UsernameService } from '../username.service';
import { Message } from '../write-page/message';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServerService } from 'src/app/applications/server.service';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(
    private username: UsernameService,
    private http: HttpClient,
    private serverAddress: ServerService
  ) { }
  private messages: Message[];
  private updatedMessages = new Subject<Message[]>();

  // Returns the messages
  getMessages() {
    // tslint:disable-next-line: max-line-length
    this.http.post<{message: Message[], statusCode: string}>(this.serverAddress.getServerAddress() + '/pull/message', {username: this.username.getUsername()})
      .subscribe(res => {
        this.messages = res.message;
        this.updatedMessages.next(this.messages);
      });
  }

  // Put message
  // A letter is a single message with the name of sender and receiver
  putMessages = (letter: Message) => {
    this.messages.push(letter);
    // Call subject to update
    this.updatedMessages.next([...this.messages]);
  }

  getUpdatedMessages = () => this.updatedMessages.asObservable();
}
