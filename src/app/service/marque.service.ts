import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marque } from '../classe/marque';

const URL = 'http://localhost:3000/marques';
@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(private http : HttpClient) { }
 
  getMarque():Observable<Marque[]>{
    return this.http.get<Marque[]>(URL);
    }

   

}
