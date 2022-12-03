import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Marque } from 'src/app/classe/marque';
import { MarqueService } from 'src/app/marque.service';


import { Produit } from '../../classe/produit';


@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
 marques!:Marque[];
 produits!:Produit[];

 constructor(private marqueService : MarqueService,private router:Router) { }

  ngOnInit(): void {

  this.marqueService.getMarque().subscribe(data => this.marques=data);

  }

  Marque()
{ this.router.navigate(['/detailsmarque']); }


 

}
