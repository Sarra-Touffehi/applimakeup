import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../classe/article';
import { Commande } from '../classe/commande';


const URL= 'http://localhost:3000/commandes';
@Injectable({
  providedIn: 'root'
})


export class CommandesService {
  listarticle:Commande[]=[];
  constructor(private http:HttpClient) { }

  getCommandes():Observable<Commande[]>{
    return this.http.get<Commande[]>(URL);
    }

  
  addCommandes(art:Article[],tot:number):Observable<Commande>{
    const com:Commande={
      listarticle:art,
      total:tot,

    };
    return this.http.post<Commande>(URL, com);
    }


  
     
    }


