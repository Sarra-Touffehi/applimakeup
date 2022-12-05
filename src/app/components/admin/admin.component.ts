import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/classe/produit';
import { ProduitService } from 'src/app/produit.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public currentProduit!:Produit;
  form:FormGroup=new FormGroup({
    id: new FormControl(),
    nom:new FormControl(''),
    prix:new FormControl(),  
    type:new FormControl(''),
    photo:new FormControl(''),
    
  
  })
  
  constructor(private activatedRouter:ActivatedRoute,private produitService:ProduitService,private fb:FormBuilder/*,private router:Router*/) { }
  /*onAjouter(){
   
    this.produitService.addProduit(this.form.value)
    .subscribe(data => this.produits.push(data) );
    this.router.navigate(['/Package']);
    }*/
  ngOnInit(): void {
  }

}
