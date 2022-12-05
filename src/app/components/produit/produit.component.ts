import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PanierService } from 'src/app/service/panier.service';
import { ProduitService } from 'src/app/service/produit.service';
import { Produit } from '../../classe/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

produits!:Produit;

  idProduit!:number;
  productForm!:FormGroup;
  com:string='';
  p:Produit[]=[];


  constructor(private activatedRoute:ActivatedRoute ,private produitService:ProduitService,private fb:FormBuilder,private router:Router,private panierService:PanierService) { }


  AjouterAuPanier(id:number){
    //this.produitService.addProduit().subscribe (data => console.log(data));


  }


  ajouterCommentaire(id:number){
   let c=this.productForm.value['comm'];
    alert(c);
   // this.produitService.addCom(c).subscribe( data   => this.p.commentaire.push(c) );
   
    this.produitService.addCom(c).subscribe(data => this.p.push(c));
    this.com=c;
  }

  
    ngOnInit() {
      this.productForm=this.fb.group({
       
        comm:[''],
       
      })



      this.idProduit = this.activatedRoute.snapshot.params['id'];

      this.produitService.getProduitById(this.idProduit).subscribe(data=>this.produits=data)
      

      }

      ajouterAuPanier(qte:string){
        this.panierService.ajouterPanier(this.produits,Number(qte));
          }
  }


