import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  currentUser:any
  showNav:boolean=true;

  constructor(private router:Router,private token:TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser=this.token.getUser();
    this.router.events.subscribe(event=>this.NavBar(event))
  }

  NavBar(location:any){
    location.url !="/home"?this.showNav=false:this.showNav=true;
  }

}
