import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from "@angular/router";
import { Observable } from 'rxjs/Rx';

import { AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
     return this.authService.isAuthenticated().first();
  }
}
