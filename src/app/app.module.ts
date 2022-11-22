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
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { HeadersarraComponent } from "./components/headersarra/headersarra.component";


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
        
    ]
})
export class AppModule { }
