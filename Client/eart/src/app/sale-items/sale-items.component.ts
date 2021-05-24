import { Component, OnInit } from '@angular/core';
import { ArtworkService } from '../_services/artwork.service';

@Component({
  selector: 'app-sale-items',
  templateUrl: './sale-items.component.html',
  styleUrls: ['./sale-items.component.scss']
})
export class SaleItemsComponent implements OnInit {

  sellerId:any="";

  Category:any=[{id:0,name:'Visual Arts'},
  {id:1,name:'Graphic Arts'},
  {id:2,name:'Plastic Arts'},
  {id:3,name:'Decorative Arts'},
  {id:4,name:'Photography'}];

  SubCategory:any=[
    {id:0,name:'Painting'},
    {id:1,name:'Drawing'},
    {id:2 ,name:'Sculpture'},
    {id:3,name:'Design'},
    {id:4,name:'Form Expressed'},
    {id:5,name:'Flat Surface'},
    {id:6,name:'Modelling'},
    {id:7,name:'Enamel Work'},
    {id:8, name:'Furniture Design'},
    {id:9,name:'Mosaic'},
    {id:10,name:'Vintage'},
    {id:11,name:'Motion Picture'}];

    Culture:any=[
      {id:0, name:'African'},
      {id:1,name:'Central Asian'},
      {id:2,name:'East Asian'},
      {id:3,name:'South Asian'},
      {id:4,name:'SouthEast Asian'},
      {id:5, name:'Latin American'},
      {id:6,name:'Native American'},
      {id:7, name:'Islamic'},
      {id:8,name:'Oceanic'},
      {id:9,name:'Western'},
      {id:10,name:'Solovene'},
      {id:11, name:'Mongolian'}
    ]

  form:any={
    //artwork
    name:null,
    category:null,
    subcategory:null,
    culture:null,
    features:null,
    origin:null,
    qualityType:null,
    description:null,
    year:"",
    medium:null,
    artist:"",
    domesticShipping:false,
    offerLocalPickup:null,
    domesticFreeShipping:false,
    internationalShipping:false,
    internationalFreeShipping:false,
    shippingCost:0,
    itemLocation:null,
    price:0,
    startingPrice:0,
    reserverdPrice:0,
    paymentOptions:[],
    salesTax:0,
    returnDomestic:false,
    returnInternational:false,

    //auction

  };

  isSuccessful=false;
  isLoggedIn=false;
  optionValue:any;
  errorMessage='';
  
  constructor(private artworkSerivce:ArtworkService) { }

  ngOnInit(): void {
    this.Category;
    this.SubCategory;
    this.Culture;
    this.sellerId="123"; //This has to be the userid that taken by auth service
  }

  onSubmit():void{
    const {name,category,subcategory,culture,features,origin, qualityType,description,year,medium,artist,domesticShipping,offerLocalPickup,domesticFreeShipping,internationalShipping,internationalFreeShipping,shippingCost,itemLocation,price,startingPrice,reserverdPrice,salesTax,returnDomestic,returnInternational}=this.form;

    this.artworkSerivce.save(name,category,subcategory,culture,features,origin, qualityType,description,year,medium,artist,domesticShipping,offerLocalPickup,domesticFreeShipping,internationalShipping,internationalFreeShipping,shippingCost,itemLocation,price,startingPrice,reserverdPrice,salesTax,returnDomestic,returnInternational,this.sellerId).subscribe(
            data=>{
                console.log(data);
                this.isSuccessful=true;
              },
              err=>{
                  this.errorMessage=err.error.message;
                  this.isSuccessful=false;
          }
      )
  
    }
}
