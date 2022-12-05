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
  role: any;
 
  



  constructor(private router :Router,private http: HttpClient) { 
  
  }

  getProduit():Observable<User[]>{
    return this.http.get<User[]>(URL);
    }

   

    





}
