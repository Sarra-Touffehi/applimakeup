import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './components/produit';
const URL = 'http://localhost:3000/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }
  
  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
    }


    getProduitById(id:number):Observable<Produit>{
      return this.http.get<Produit>(URL + "/" +id);
    }
}
