import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../classe/article';
import { Produit } from '../classe/produit';


@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier:Article[]=[];

  constructor(private http:HttpClient) { }
  getPanier(){
    return this.panier;
  }
  ajouterPanier(prod:Produit,qt:number){
   const art:Article={
    produit:prod,
    qte:qt
   };
    this.panier.push(art);

   
  }
  

  supprimerPanier(indexForRemoval:number){
    this.panier.splice(indexForRemoval,1);

  }
}
