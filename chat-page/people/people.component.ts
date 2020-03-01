import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ModalController, NavController } from '@ionic/angular';
import { WriteService } from '../write-page/write.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

  constructor(
    private chat: ChatService,
    private modal: ModalController,
    private navCtl: NavController,
    private writeSrv: WriteService
  ) { }
  public users: {_id: string, username: string}[];

  ngOnInit() {
    // Get updated users via subject
    this.chat.getUsers();
    this.chat.getUpdatedUsers().subscribe(users => {
      this.users = users;
    });
  }

  closePeopleModal = () => {
    this.modal.dismiss();
  }

  redirectToWriteMessage(receiverId: string, receiverName: string) {
    this.closePeopleModal();
    // Write service code here
    this.writeSrv.setReceiverDetails(receiverId, receiverName);
    // Redirect to write page
    this.navCtl.navigateForward('/applications/chat-web-app/chat-page/write-page');
  }

}
