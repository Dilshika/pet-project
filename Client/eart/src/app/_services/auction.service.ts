import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuctionService {

 private AUCTION_API="http://localhost:8020/auction";

 httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

  constructor(private http:HttpClient) { }

  /**GET METHODS */
      get(id:string):Observable<any>{
        return this.http.get(this.AUCTION_API+`${id}`).pipe(
          catchError((error)=>{
            console.log(error);
            return throwError(error);
          })
        )
    }
  
    getAll():Observable<any>{
        return this.http.get(this.AUCTION_API).pipe(
          catchError((error)=>{
            console.log(error);
            return throwError(error);
          })
        )
    }



  /**POST METHODS */
  
    create(name:string,sellerId:string,startAt:string,expiresAt:Date,highestBid:number,
      winnerId:string,version:string,createAt:Date):Observable<any>{
      return this.http.post(this.AUCTION_API+'/create',{
        name,
        sellerId,
        startAt,
        expiresAt,
        highestBid,
        winnerId,
        version,
        createAt
      },this.httpOptions).pipe(
        catchError((error)=>{
          console.log(error);
          return throwError(error);
        })
      )
    }

  
  createBid(auctionId:string,userId:string,email:string,amount:string,version:string,createAt:string):Observable<any>{
    return this.http.post(this.AUCTION_API+'/bid',{
      auctionId,
      userId,
      email,
      amount,
      version,
      createAt
    },this.httpOptions).pipe(
      catchError((error)=>{
          console.log(error);
          return throwError(error);
      })
    )
  }
 



}