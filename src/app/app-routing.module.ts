import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, 
  { path: 'accueil', component: AccueilComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'carte', component: CategoriesComponent },
  { path: 'acualite', component: ActualiteComponent },
  { path: 'success', component: SuccessComponent },







  // Redirection par défaut vers le composant de connexion

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
