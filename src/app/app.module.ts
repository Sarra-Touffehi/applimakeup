import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProduitComponent } from './components/produit/produit.component';
import { ListproduitComponent } from './components/listproduit/listproduit.component';
import { PromoproductComponent } from './components/promoproduct/promoproduct.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { MenuComponent } from './components/menu/menu.component';
import { MarqueComponent } from './components/marque/marque.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';

import { HeadersarraComponent } from './components/headersarra/headersarra.component';
import {HttpClientModule} from "@angular/common/http";
import { Error404Component } from './components/error404/error404.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PanierComponent } from './components/panier/panier.component';
import { LoginComponent } from './components/login/login.component';
import { ListproduitchildComponent } from './components/listproduitchild/listproduitchild.component';

import { AdminComponent } from './components/admin/admin.component';
import { EtoilenomPipe } from './etoilenom.pipe';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
   
    ProduitComponent,
    ListproduitComponent,
    PromoproductComponent,
    BestsellerComponent,
    MenuComponent,
    MarqueComponent,
    AcceuilComponent,
    HeadersarraComponent,
    Error404Component,
    PanierComponent,
    LoginComponent,
    ListproduitchildComponent,

    AdminComponent,
      EtoilenomPipe,



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   // NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]




})
export class AppModule { }
