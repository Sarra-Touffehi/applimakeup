import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { ListproduitComponent } from './components/listproduit/listproduit.component';
import { MarqueComponent } from './components/marque/marque.component';
import { PromoproductComponent } from './components/promoproduct/promoproduct.component';

const routes: Routes = [
 
  {path:'acceuil', component:AcceuilComponent},
  {path:'marque', component:MarqueComponent},
{path:'listproduit', component:ListproduitComponent},
{path:'bestseller', component:BestsellerComponent},
{path:'promo', component:PromoproductComponent},
{path:'', redirectTo:'acceuil', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
