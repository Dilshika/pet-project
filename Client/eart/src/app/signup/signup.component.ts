import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:any={
    username:null,
    email:null,
    password:null
  };

  isSuccessful=false;
  isSignUpFailed=false;
  errorMessage='';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    const{username,email,password}=this.form;
    const role="user";

    this.authService.signup(username,email,password,role).subscribe(
      data=>{
        console.log(data);
        this.isSuccessful=true;
        this.isSignUpFailed=false;
      },
      err=>{
        this.errorMessage=err.error.message;
        this.isSignUpFailed=true;
      }
    )
  }

}
