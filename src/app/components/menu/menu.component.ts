import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/classe/produit';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  searchForm:FormGroup = new FormGroup({
    search: new FormControl('')
  })

public produits:Produit[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  productFilter(lesProduits:Produit[],nom :String){
    const p= lesProduits.filter(data=>data.nom==nom);
    return p;

  }
}
