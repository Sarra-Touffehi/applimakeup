import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProduitComponent } from './components/produit/produit.component';
import { ListproduitComponent } from './components/listproduit/listproduit.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { PromoproductComponent } from './components/promoproduct/promoproduct.component';
import { BestsellerComponent } from './components/bestseller/bestseller.component';
import { MenuComponent } from './components/menu/menu.component';
import { MarqueComponent } from './components/marque/marque.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
<<<<<<< HEAD
import { HeadersarraComponent } from './components/headersarra/headersarra.component';
import {HttpClientModule} from "@angular/common/http";
import { Error404Component } from './components/error404/error404.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   
    ProduitComponent,
    ListproduitComponent,
    NewproductComponent,
    PromoproductComponent,
    BestsellerComponent,
    MenuComponent,
    MarqueComponent,
    AcceuilComponent,
    HeadersarraComponent,
    Error404Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
import { HeadersarraComponent } from "./components/headersarra/headersarra.component";
import {HttpClientModule} from "@angular/common/http";


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
        AcceuilComponent,
        HeadersarraComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        
    ]
>>>>>>> f57864e50eeff278171b262dfe0f61b65a7e8faa
})
export class AppModule { }
