import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/service/produit.service';
import { Produit } from '../../classe/produit';

@Component({
  selector: 'app-promoproduct',
  templateUrl: './promoproduct.component.html',
  styleUrls: ['./promoproduct.component.css']
})
export class PromoproductComponent implements OnInit {
  lesProduits!:Produit[];
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe (data => this.lesProduits = data)
  }


  productFilter(lesProduits:Produit[],promo :boolean){
    const p= lesProduits.filter(data=>data.promo==promo);
    return p;

  }

}
