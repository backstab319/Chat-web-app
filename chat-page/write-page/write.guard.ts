import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { WriteService } from './write.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WriteGuard implements CanLoad {

  constructor(
    private writeSrv: WriteService,
    private navCtl: NavController
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      if (!this.writeSrv.isReceiverSet()) {
        this.navCtl.navigateBack('/applications/chat-web-app');
      }

      return this.writeSrv.isReceiverSet();
  }
}
