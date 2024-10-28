import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { NouveauProduitsComponent } from './nouveau-produits/nouveau-produits.component';

const routes: Routes = [
  { path: "products",component:ProduitsComponent

  },
  {
    path: "new-products", component:NouveauProduitsComponent
  },
  {
    path:"", redirectTo:"/products",pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
