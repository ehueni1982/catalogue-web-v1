
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {

produit:any;
currentPage:number=0;
size:number=5;
pages?: Array<number>;
totalPages?:number;
currentKeyword:string=""; 

  constructor(private catalogueService:CatalogueService, private router:Router){}
  
    ngOnInit(): void {
      
    }

    onGetProducts(){
      this.catalogueService.getProducts(this.currentPage,this.size)
      .subscribe({
        next: (data:any)=>{
          this.totalPages = data["page"].totalPages;
          this.pages = new Array(this.totalPages);
          this.produit=data;
        },error:(err)=> console.log(err)
      });
    } 
  
  
    onPageProduct(i: number) {
      this.currentPage=i;
      this.chercherProduit();
      }

      onChercher(form:any){
        this.currentPage=0
        this.currentKeyword = form.keyword;
        this.chercherProduit();

      }

      chercherProduit(){
        this.catalogueService.getProductsByKeyword(this.currentKeyword,this.currentPage,this.size)
          .subscribe({
          next:  (data:any)=>{
          this.totalPages = data["page"].totalPages;
          this.pages = new Array(this.totalPages);
            this.produit=data;
            },error:(err)=> console.log(err)
        });
      }

     

    onEditProduct(id:number){

      this.router.navigate(['']);

    }
    
    onDeleteProduct(p:any){
      let confirm=window.confirm('Voulez vous poursuivre cette action?');
      if(confirm==true){
        this.catalogueService.deleteProduct(p._links.self.href)
        .subscribe({
          next: (data: any) =>{
            this.chercherProduit();
            console.log(data);
          }, error: (err) =>console.log(err)
        });
      }

    }

}


