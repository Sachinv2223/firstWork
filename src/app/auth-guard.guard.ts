import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  a=10;
  b=20;
  canActivate() {
    //bussiness logic
    if(this.a == this.b) {
    return true;
    } else{
      return false;
    }
  }
  
}
