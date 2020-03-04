import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { ModalController, NavController } from '@ionic/angular';
import { WriteService } from '../write-page/write.service';
import { UsernameService } from '../username.service';

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
    private writeSrv: WriteService,
    private username: UsernameService
  ) { }
  public users: [];

  ngOnInit() {
    // Get updated users via subject
    this.chat.getUsers();
    this.chat.getUpdatedUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }

  // executeOnceFuntion() {
  //   const index = this.users.findIndex(x => {
  //     return x.username === this.username.getUsername();
  //   });
  //   this.users.splice(index, 1);
  //   this.executeOnce = false;
  //   return;
  // }

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
