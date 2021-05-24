//@desc this service sends signup,signin HTTP POST request to back-end
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_API="http://localhost:3000/auth";

  httpOptions={
    headers:new HttpHeaders({'content-Type':'application/json'})
  }

  constructor(private http:HttpClient,
    ) { }

  /*POST User Credentials from the Server*/ 

  //sign in
  signin(email:string,password:string):Observable<any>{
    return this.http.post(this.AUTH_API+'/signin',{
      email,
      password
    },this.httpOptions);
    }

    //signup 
    signup(username:string,email:string,password:string,role:string):Observable<any>{
      return this.http.post(this.AUTH_API+'/signup',{
        username,
        email,
        password,
        role
        
      },this.httpOptions)
    }

    
    //reset password
    reset(email:string,password:string):Observable<any>{
      return this.http.post(this.AUTH_API+'reset',{
        email,
        password
      },this.httpOptions)
    }
  }





