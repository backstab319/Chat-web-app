import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WriteService } from './write.service';
import { UsernameService } from '../username.service';
import { Message } from './message';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-write-page',
  templateUrl: './write-page.page.html',
  styleUrls: ['./write-page.page.scss'],
})
export class WritePagePage implements OnInit {

  constructor(
    private writeSrv: WriteService,
    private usernameSrv: UsernameService,
    private toastCtl: ToastController
  ) { }
  private message: Message;

  ngOnInit() {
  }

  messageFormProcessor(messageFormData: NgForm) {
    if (this.messageValidator(messageFormData.value.message)) {

      // Fetch Date and time
      const date = new Date();

      this.message = {
        receiverName: this.writeSrv.getReceiverDetails().receiverName,
        senderName: this.usernameSrv.getUsername(),
        messageBody: messageFormData.value.message,
        messageDate: date.toLocaleDateString(),
        messageTime: date.toLocaleTimeString()
      };
      this.writeSrv.sendMessage(this.message);
      this.messageSent();
    } else {
      return;
    }
    messageFormData.resetForm();
  }

  messageValidator = (message: string) => {
    return message.length > 1;
  }

  // Show a toast when message is sent
  async messageSent() {
    const sent = await this.toastCtl.create({
      message: 'Message sent successfully!',
      duration: 1000,
      color: 'primary'
    });
    sent.present();
  }

}
