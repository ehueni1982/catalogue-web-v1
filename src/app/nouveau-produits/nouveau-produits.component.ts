import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-nouveau-produits',
  templateUrl: './nouveau-produits.component.html',
  styleUrl: './nouveau-produits.component.css'
})
export class NouveauProduitsComponent implements OnInit {

  currentProduct: Produit=new Produit();
  mode:number=1;

    constructor( private catalogueService:CatalogueService, private router:Router){}

    ngOnInit(): void {
      
    }

    onSaveProduct(data: any) {
      this.catalogueService.saveProduct(this.catalogueService.host+"/produits",data)
        .subscribe({
          next: (res:any)=>{
            //this.router.navigateByUrl("/products");
            this.currentProduct = res;
            this.mode=2;
            //console.log(res);
          },error:(err)=>console.log(err)
        });
    }

    onNewProduct(){
      this.mode=1
    }
  

    



}
