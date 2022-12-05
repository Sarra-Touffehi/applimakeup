import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './classe/user';

const URL="http://localhost:3000/users"
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  valide:boolean=false;
  role: any;
  constructor(private router :Router,private http: HttpClient) { }
 
    
    getUsers(user:string,pass:string):Observable<User[]>{
      return this.http.get<User[]>(URL+'?username='+user+'&password='+pass);
    }//requete envoi un tableau des users ayant ce user et mdp

    





}
