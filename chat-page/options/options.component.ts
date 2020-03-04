import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, PopoverController, AlertController, ToastController } from '@ionic/angular';
import { PeopleComponent } from '../people/people.component';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {

  constructor(
    private navCtl: NavController,
    private modal: ModalController,
    private popover: PopoverController,
    private userSrv: UsernameService,
    private alertCtl: AlertController,
    private toastCtl: ToastController
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

  logOut() {
    this.showLogoutAlert();
  }

  async showLogoutAlert() {
    this.popover.dismiss();
    const logoutAlert = await this.alertCtl.create({
      header: 'Logout',
      subHeader: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'yes',
          handler: async () => {
            // Destroy username
            this.userSrv.setUsername('');
            // Show the logged out toast
            await this.showLoggedOutToast();
            // Redirect to applications page after 1 second
            this.navCtl.navigateBack('/applications');
          }
        },
        {
          text: 'No',
          role: 'no'
        }
      ]
    });
    await logoutAlert.present();
  }

  async showLoggedOutToast() {
    const loggedOutToast = await this.toastCtl.create({
      message: 'Successfully logged out! Please wait while we redirect you',
      color: 'primary',
      duration: 1000
    });
    loggedOutToast.present();
  }

  async showPeopleModal() {
    const peopleModal = await this.modal.create({
      component: PeopleComponent
    });
    return await peopleModal.present();
  }

}
