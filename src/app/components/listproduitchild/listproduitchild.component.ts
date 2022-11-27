import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-listproduitchild',
  templateUrl: './listproduitchild.component.html',
  styleUrls: ['./listproduitchild.component.css']
})
export class ListproduitchildComponent implements OnInit {
 // lesProduits!:Produit[];
@Input() pro!:Produit;
  constructor() { }

  ngOnInit(): void {
  }

}
