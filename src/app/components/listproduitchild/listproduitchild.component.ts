import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/classe/produit';
import { PanierService } from 'src/app/service/panier.service';


@Component({
  selector: 'app-listproduitchild',
  templateUrl: './listproduitchild.component.html',
  styleUrls: ['./listproduitchild.component.css']
})
export class ListproduitchildComponent implements OnInit {
 lesProduits!:Produit[];
@Input() pro!:Produit;
  constructor(private panierService:PanierService) { }

  ngOnInit(): void {
  }

  ajouterAuPanier(){
this.panierService.ajouterPanier(this.pro,1);
alert('Article ajouté au panier!');
  }
}
