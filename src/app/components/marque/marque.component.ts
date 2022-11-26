import { Component, OnInit } from '@angular/core';

import { Marque } from 'src/app/marque';
import { MarqueService } from 'src/app/marque.service';


import { Produit } from '../produit';


@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
 marques!:Marque[];
 produits!:Produit[];

 constructor(private marqueService : MarqueService) { }

  ngOnInit(): void {

  this.marqueService.getMarque().subscribe(data => this.marques=data);

  }

  productFilter(produits:Produit[],marque :string){
    const a= produits.filter(data=>data.marque==marque);
    return a;

  }

}
