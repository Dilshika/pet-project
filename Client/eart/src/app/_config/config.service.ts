import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public handleError(error:HttpErrorResponse){
    if(error.status===0){
      //A client-side or network error 
      console.error('An error occured:',error.error);
    }
    else{
      //The backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}`,+
        `Body: ${error.error}`
      );
    }
    //Return an observable with a user-facing error message.
    return throwError(
      'Something went wrong, please try again later'
    )
  }
 
}
