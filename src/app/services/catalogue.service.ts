import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  

  host:string="http://localhost:8080";

  constructor( private httpClient:HttpClient) { }

    //Retour objet de type observable
    public getProducts(page:number,size:number){
      return this.httpClient.get(this.host+"/produits?page="+page+"&size="+size);
    }
  //Chercher
    public getProductsByKeyword(mc:string,page:number,size:number){
      return this.httpClient.get(this.host+"/produits/search/byDesignationPage?mc="+mc+"&Page="+page+"&size="+size);
    
      
    }


  deleteProduct(url:any) {
      return this.httpClient.delete(url);
    }

    //Retourne un objet  Observable de type Produit
    saveProduct(url:any,data:any):Observable<Produit>{
      return this.httpClient.post(url,data);
    }

    getEditProduct(url:any):Observable<Produit>{
      return this.httpClient.get(url);
    }

    UpdateProduct(url:any,data:any){
      return this.httpClient.put(url,data);
    }

    


}
