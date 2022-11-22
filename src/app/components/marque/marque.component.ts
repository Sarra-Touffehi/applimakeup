import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProduitService } from 'src/app/produit.service';
import { Produit } from '../produit';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  lesProduits!:Produit[];
  constructor(private fb:FormBuilder,
  private produitService:ProduitService) { }
 

  ngOnInit(): void {
    this.produitService.getProduits()
 .subscribe (data => this.lesProduits = data)
 }
  }


