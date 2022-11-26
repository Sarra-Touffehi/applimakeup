import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/produit.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {
  lesProduits!:Produit[];
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe (data => this.lesProduits = data)

  }

  productFilter(lesProduits:Produit[],bestS :boolean){
    const a= lesProduits.filter(data=>data.bestS==bestS);
    return a;

  }

}
