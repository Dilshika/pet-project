import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

private ARTWORK_API="http://localhost:8000/artwork";

httpOptions={
  headers:new HttpHeaders({'content-Type':'application/json'})
}

  constructor(private http:HttpClient) { }

  /**POST METHODS */
  save(name:string,category:string,subcategory:string,culture:string,features:string,origin:string,qualityType:string,description:string,
    year:string,medium:string,artist:string,domesticShipping:string,offerLocalPickup:string,domesticFreeShipping:string,
    internationalShipping:string,internationalFreeShipping:string,shippingCost:string,
    itemLocation:string,price:string,startingPrice:string,reserverdPrice:string,salesTax:string,returnDomestic:string,returnInternational:string,sellerId:string):Observable<any>{

      return this.http.post(this.ARTWORK_API+'/create',{
        name,
        category,
        subcategory,
        culture,
        sellerId,
        features,
        origin,
        qualityType,
        description,
        year,
        medium,
        artist,
        domesticShipping,
        offerLocalPickup,
        domesticFreeShipping,
        internationalShipping,
        internationalFreeShipping,
        shippingCost,
        itemLocation,
        price,
        startingPrice,
        reserverdPrice,
        salesTax,
        returnDomestic,
        returnInternational,
       },this.httpOptions).pipe(
        catchError((error)=>{
          console.log(error);
          return throwError(error);
        })
      )
    } 

  /**GET METHODS */
  findArt(id:string):Observable<any>{
    return this.http.get(this.ARTWORK_API+`/${id}`).pipe(
      catchError((error)=>{
        console.log(error);
        return throwError(error);
      })
    )
  }

  //getAll
  getAll():Observable<any>{
    return this.http.get(this.ARTWORK_API).pipe(
      catchError((error)=>{
        console.log(error);
        return throwError(error);
      }) 
    )
  }
}
