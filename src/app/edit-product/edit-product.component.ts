import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
    
  currentProduct: Produit=new Produit();
  url?: string;

    constructor( private catalogueService:CatalogueService,private router:Router, private activateRoute:ActivatedRoute){}

    ngOnInit(): void {
      this.url = atob(this.activateRoute.snapshot.params['id']);
      //console.log(url);
      this.catalogueService.getEditProduct(this.url)
        .subscribe({
          next:(data:any)=>{
            this.currentProduct=data;
          },error:(err)=>{
            console.log(err);
          }
        });
    }

    onUpdateProduct(value:any){
      this.catalogueService.UpdateProduct(this.url,value)
        .subscribe({
          next:(data:any)=>{
            alert("Mise à jour effectuée avec succès!!!");
            this.router.navigateByUrl("/products")
          },error:(err)=>{
            console.log(err);
          }
        })

    }

}
