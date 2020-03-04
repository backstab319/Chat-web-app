import { Component, OnInit, OnDestroy } from '@angular/core';
import { InboxService } from './inbox.service';
import { Message } from '../write-page/message';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit, OnDestroy {

  constructor(
    private inboxSrv: InboxService
  ) { }
  public messages: Message[];
  private inboxServiceRunner;

  ngOnInit() {
    // Subscription to update messages automatically
    this.inboxSrv.getMessages();
    this.inboxSrv.getUpdatedMessages()
      .subscribe(letter => {
        this.messages = letter;
        console.log(this.messages);
      });
    // Get new messages if any every 5 seconds
    this.inboxServiceRunner = setInterval(() => {
      this.inboxSrv.getMessages();
    }, 5000);
  }

  ngOnDestroy() {
    if (this.inboxServiceRunner) {
      clearInterval(this.inboxServiceRunner);
    }
  }

}
