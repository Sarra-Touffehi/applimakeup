import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevresComponent } from './components/levres/levres.component';
import { MarqueComponent } from './components/marque/marque.component';
import { OnglesComponent } from './components/ongles/ongles.component';
import { PromoproductComponent } from './components/promoproduct/promoproduct.component';
import { SoinComponent } from './components/soin/soin.component';
import { YeuxComponent } from './components/yeux/yeux.component';

const routes: Routes = [
  {path:'marque', component:MarqueComponent},
{path:'ongles', component:OnglesComponent},
{path:'levres', component:LevresComponent},
{path:'yeux', component:YeuxComponent},
{path:'soin', component:SoinComponent},
{path:'promo', component:PromoproductComponent},
{path:'', redirectTo:'menu', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
