import { Injectable } from '@angular/core';

const TOKEN_KEY='auth-token';
const USER_KEY='auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  //signout
  signOut():void{
    window.sessionStorage.clear();
  }

  //save token to the session storage
  public saveToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,JSON.stringify(token));
  }

  //retrieve token
  public getToken():string|null{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  //save user role
  public saveUser(user:any):void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,JSON.stringify(user));
  }

  //get user
  public getUser():any{
    const user=window.sessionStorage.getItem(USER_KEY);
    if(user){
      console.log(user);
      return JSON.parse(user);
    }

    return {};
  }

}
