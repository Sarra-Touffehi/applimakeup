import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './service/authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private auth:AuthentificationService,private router:Router){}
 
   
    canActivate(
      route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
 
  let valid = this.auth.valide;
  if(valid){
    return true;
  }
  else{
    this.router.navigate(['/login']);
    return false;
  }
  }
  
}
