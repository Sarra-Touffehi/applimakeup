import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProduitService } from 'src/app/service/produit.service';
import { Produit } from '../../classe/produit';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
  lesProduits!:Produit[];
  constructor(private fb:FormBuilder,
  private produitService:ProduitService) { }
  
  

  ngOnInit(): void {
   this.produitService.getProduits().subscribe (data => this.lesProduits = data)
 }


  }


