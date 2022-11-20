import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListchoixetrechComponent } from './components/listchoixetrech/listchoixetrech.component';
import { ProduitComponent } from './components/produit/produit.component';
import { ListproduitComponent } from './components/listproduit/listproduit.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { PromoproductComponent } from './components/promoproduct/promoproduct.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { MenuComponent } from './components/menu/menu.component';
import { MarqueComponent } from './components/marque/marque.component';
import { OnglesComponent } from './components/ongles/ongles.component';
import { LevresComponent } from './components/levres/levres.component';
import { YeuxComponent } from './components/yeux/yeux.component';
import { SoinComponent } from './components/soin/soin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListchoixetrechComponent,
    ProduitComponent,
    ListproduitComponent,
    NewproductComponent,
    PromoproductComponent,
    BestsellerComponent,
    MenuComponent,
    MarqueComponent,
    OnglesComponent,
    LevresComponent,
    YeuxComponent,
    SoinComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
