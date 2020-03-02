import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsernameService } from '../username.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InboxGuard implements CanLoad {

  constructor(
    private username: UsernameService,
    private navCtl: NavController
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      if (!this.username.isUserSet()) {
        this.navCtl.navigateBack('/applications/chat-web-app');
      }
      return this.username.isUserSet();
  }
}
