import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsernameService } from './username.service';

@Injectable({
  providedIn: 'root'
})
export class ChatPageGuard implements CanLoad {

  constructor(
    private us: UsernameService,
    private router: Router
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      if (!this.us.isUserSet()) {
        this.router.navigateByUrl('/applications/chat-web-app');
      }

      return this.us.isUserSet();
  }
}
