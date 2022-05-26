import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoLogin implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  constructor(
    private loginService:LoginServiceService,
    private _router: Router
  ) {}

  canActivate(): boolean {
    if(this.loginService.getToken().length > 0){
        this._router.navigate(["/home"]); // or home
        return false;
    }
    return true;
  }
}