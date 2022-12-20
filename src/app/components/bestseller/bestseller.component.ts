import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';
import { Produit } from '../../classe/produit';

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
    const p= lesProduits.filter(data=>data.bestS==bestS);
    
    return p;

  }

}
