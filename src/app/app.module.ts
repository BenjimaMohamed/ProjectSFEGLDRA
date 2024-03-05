import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CategoriesComponent } from './categories/categories.component';
import { CarteComponent } from './carte/carte.component';
import { SuccessComponent } from './success/success.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CategoriesComponent,
    CarteComponent,
    SuccessComponent,
    ActualiteComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
