import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriteService {

  constructor() { }
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
}
