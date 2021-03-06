import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: any={
    email:null,
    password:null
  };

  isLoggedIn=false;
  isLoginFailed=false;
  errorMessage='';
  role:null;

  constructor(private authService:AuthService,private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    const {email,password}=this.form;
    this.authService.signin(email,password).subscribe(
      data=>{
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed=false;
        this.isLoggedIn=true;
        this.role=this.tokenStorage.getUser().role;
        //this.reloadPage();
      }, err=>{
        this.errorMessage=err.error.message;
        this.isLoginFailed=true;
      }
    );
  }

  reloadPage():void{
    window.location.reload();
  }

}
