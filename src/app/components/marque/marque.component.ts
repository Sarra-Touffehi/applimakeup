import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Marque } from 'src/app/marque';
import { MarqueService } from 'src/app/marque.service';
=======
import { FormBuilder } from '@angular/forms';
import { ProduitService } from 'src/app/produit.service';
import { Produit } from '../produit';
>>>>>>> 5bea36cd2ff54c1a21337a41e319abd96f4c77c1

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
<<<<<<< HEAD
  marques!:Marque[];

  constructor(private marqueService : MarqueService) { }

  ngOnInit(): void {

    this.marqueService.getMarque().subscribe(data => this.marques=data);
=======
  lesProduits!:Produit[];
  constructor(private fb:FormBuilder,
  private produitService:ProduitService) { }
 

  ngOnInit(): void {
    this.produitService.getProduits()
 .subscribe (data => this.lesProduits = data)
 }
>>>>>>> 5bea36cd2ff54c1a21337a41e319abd96f4c77c1
  }


