import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Article } from 'src/app/classe/article';
import { Commande } from 'src/app/classe/commande';
import { Produit } from 'src/app/classe/produit';
import { CommandesService } from 'src/app/service/commandes.service';
import { PanierService } from 'src/app/service/panier.service';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produitsPanier!:Article[];
  produits!:Produit[];
  produitsCommande!:Commande[];

  constructor(private panierService:PanierService, private produitService:ProduitService,private fb:FormBuilder,private commandeService:CommandesService ) { }

  ngOnInit(): void {
    this.produitsPanier=this.panierService.getPanier();
    this.produitService.getProduits().subscribe(data => this.produits=data);
    this.commandeService.getCommandes().subscribe(data => this.produitsCommande=data);
  }
  supprimerPanier(index:number){
    this.panierService.supprimerPanier(index);
  }

  onAjouter(){
   
  // this.commandeService.addCommandes(this.).subscribe(data => this.produitsPanier.push(data));
  
  
    this.commandeService.addCommandes(this.produitsPanier,this.calculer());
    alert('commande passée');
      
  }

  calculer(){
   let  somme=0;
   for(let i=0;i<this.panierService.panier.length;i++){
  
    somme=somme+(this.panierService.panier[i].produit.prix)*this.panierService.panier[i].qte;
   }
   return somme;
    
  }
}
