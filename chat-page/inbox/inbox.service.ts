import { Injectable } from '@angular/core';
import { UsernameService } from '../username.service';
import { Message } from '../write-page/message';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(
    private username: UsernameService,
    private http: HttpClient
  ) { }
  private messages: Message[];
  private updatedMessages = new Subject<Message[]>();

  // Returns the messages
  getMessages() {
    this.http.post<{message: Message[], statusCode: string}>('http://localhost:3000/pull/message', {username: this.username.getUsername()})
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
