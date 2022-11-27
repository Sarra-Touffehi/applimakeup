import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Produit } from 'src/app/classe/produit';
import { ProduitService } from 'src/app/produit.service';


@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  lesProduits!:Produit[];
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe (data => this.lesProduits = data)

  }

  productFilter(lesProduits:Produit[],nouveau :boolean){
    const p= lesProduits.filter(data=>data.nouveau==nouveau);
    return p;

  }

}
