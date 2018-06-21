import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(protected auth: AuthService, protected router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const isLoggedIn =  this.auth.isLoggedInSimple();

      if(!isLoggedIn) {
        this.router.navigate(['/login'], {queryParams: {returnState: state.url}});
      }

      return isLoggedIn;
  }
}
