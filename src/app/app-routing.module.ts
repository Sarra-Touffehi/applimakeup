import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { Error404Component } from './components/error404/error404.component';
import { ListproduitComponent } from './components/listproduit/listproduit.component';
import { MarqueComponent } from './components/marque/marque.component';
import { PromoproductComponent } from './components/promoproduct/promoproduct.component';

const routes: Routes = [
 
  {path:'acceuil',title:'Acceuil', component:AcceuilComponent},
  {path:'marque',title:'Marque', component:MarqueComponent},
{path:'listproduit', title:'Listproduit',component:ListproduitComponent},
{path:'bestseller', title:'Bestseller',component:BestsellerComponent},
{path:'promo', component:PromoproductComponent},
{path:'', redirectTo:'acceuil', pathMatch:'full'},
{path:'**', title:'Erreur',component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
