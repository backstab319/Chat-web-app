import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { PeopleComponent } from '../people/people.component';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {

  constructor(
    private navCtl: NavController,
    private modal: ModalController,
    private popover: PopoverController
  ) { }

  ngOnInit() {}

  gotoPage(pageName: string) {
    // Show people modal
    if (pageName === 'people') {
      this.popover.dismiss();
      this.showPeopleModal();
    }

    // Goto inbox page
    if (pageName === 'inbox') {
      this.popover.dismiss();
      this.navCtl.navigateForward('/applications/chat-web-app/chat-page/inbox-page');
    }
  }

  async showPeopleModal() {
    const peopleModal = await this.modal.create({
      component: PeopleComponent
    });
    return await peopleModal.present();
  }

}
