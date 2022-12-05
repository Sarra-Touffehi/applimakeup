import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service/authentification.service';
import { Produit } from 'src/app/classe/produit';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-headersarra',
  templateUrl: './headersarra.component.html',
  styleUrls: ['./headersarra.component.css']
})
export class HeadersarraComponent implements OnInit {
  lesProduits:Produit[]=[];

  constructor(private produitService:ProduitService,private router:Router,public login:AuthentificationService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe (data => this.lesProduits = data)
  }



}
