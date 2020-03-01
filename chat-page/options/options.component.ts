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
    if (pageName === 'people') {
      this.popover.dismiss();
      this.showPeopleModal();
    }
  }

  async showPeopleModal() {
    const peopleModal = await this.modal.create({
      component: PeopleComponent
    });
    return await peopleModal.present();
  }

}
