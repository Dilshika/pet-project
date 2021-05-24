import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../_services/token-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser:any;

  constructor(private token:TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser=this.token.getUser().username;
  }

}
