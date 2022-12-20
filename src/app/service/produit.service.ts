import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../classe/produit';
import { Com } from '../classe/com';
import { Commentaire } from '../classe/commentaire';
const URL = 'http://localhost:3000/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  Com:string[]=[];

  constructor(private http:HttpClient) { }
  
  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
    }


    getProduitById(id:number):Observable<Produit>{
      return this.http.get<Produit>(URL + "/" +id);
    }

    addProduit(p:Produit):Observable<Produit>{
      return this.http.post<Produit>(URL, p);
      }
      deleteProduit(id:number){
        return this.http.delete(URL+"/"+id);     }

     updateProduit (id:number,p:Produit):Observable<Produit>{
          return this.http.put<Produit>(`${URL}/${id}`,p);
        }

   // commenter(s:string):Observable<string>{
   //   return this.http.post<string>(URL,s);
   // }
   addCom(s:string):Observable<string>{
     return this.http.post<string>(URL , s);
      }

  //    addCom(Com : string){
   //     this.Com.push(Com);
   //   }
      
      
     


}
