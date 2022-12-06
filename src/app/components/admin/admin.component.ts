import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { Produit } from 'src/app/classe/produit';
import { Produit } from '../../classe/produit';
import { ProduitService } from 'src/app/service/produit.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  form!:FormGroup
  produits!:Produit[];
  constructor(private activatedRouter:ActivatedRoute,private produitService:ProduitService,private fb:FormBuilder,private router:Router) { }
  ngOnInit(): void {
    this.form=this.fb.nonNullable.group({
      id: new FormControl(),
      nom:new FormControl(''),
      photo:new FormControl(''),
      photoMarque:new FormControl(''),
      date_fabrication:new FormControl(),
      date_fin:new FormControl(),
      marque:new FormControl(''),
      promo:new FormControl(),
      type:new FormControl(''),
      prix:new FormControl(),  
      nouveau:new FormControl(),
      bestS:new FormControl(),
      stars:new FormControl(),})
  }
  onAjouter(){
   
    this.produitService.addProduit(this.form.value).subscribe(data => this.produits.push(data) );
   this.router.navigate(['/Package']);
    }
    onSupprimer(id:number){
      this.produitService.deleteProduit(id).subscribe(data =>this.produits=this.produits.filter(elt=>elt.id!=id));
    }
    onModifier(id:number){
    this.produitService.updateProduit(id,this.form.value).subscribe(data=>
          {var i=this.produits.findIndex(elt=>elt.id==id);
            this.produits[i]=this.form.value;
            this.produits[i].id=id;
      
          });
    }
    reset(){
      this.form.reset();
    }
    
  

}
