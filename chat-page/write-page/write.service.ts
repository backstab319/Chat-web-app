import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WriteService {

  constructor(
    private http: HttpClient
  ) { }
  private receiverDetails: {
    receiverId: string,
    receiverName: string
  };

  setReceiverDetails(id: string, name: string) {
    this.receiverDetails = {receiverId: id, receiverName: name};
  }

  getReceiverDetails() {
    return this.receiverDetails;
  }

  isReceiverSet() {
    return this.receiverDetails.receiverName.length > 0;
  }

  // Push message to the database
  sendMessage(message: Message) {
    this.http.post<{res: string}>('http://localhost:3000/push/message', message)
      .subscribe(val => {
        console.log(val.res);
      });
    // View message subject here to view message as they come i.e refresh inbox when new message is sent
  }
}
