import { Component, OnInit } from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  form:any={
    email:null,
    password:null
  }

  isReset=false;
  isResetFailed=false;
  errorMessage='';

  constructor(private authService:AuthService,private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    const {email,password}=this.form;
    this.authService.reset(email,password).subscribe(
      data=>{
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
  
          this.isResetFailed=false;
          this.isReset=true;
          
        }, err=>{
          this.errorMessage=err.error.message;
          this.isResetFailed=true;
        }
    )
  }
}
