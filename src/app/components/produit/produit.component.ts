import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/produit.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

produits!:Produit;

  idProduit!:number;


  constructor(private activatedRoute:ActivatedRoute ,private produitService:ProduitService) { }

  
    ngOnInit() {



      this.idProduit = this.activatedRoute.snapshot.params['id'];

      this.produitService.getProduitById(this.idProduit).subscribe(data=>this.produits=data)
      

      }
  }


