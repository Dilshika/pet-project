/* eslint-disable prettier/prettier */
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PaymentOption } from "src/payment-options/model/payment-options.model";
import { Category, SubCategory, Culture } from "../model/artwork.enum";

export class CreateArtworkDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    category:Category;

    subcategory:SubCategory;

    culture:Culture;

    @IsNotEmpty()
    @IsString()
    sellerId:string;

    @IsString()
    features:string;

    @IsString()
    origin:string;

    @IsString()
    qualityType:string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsString()
    year:string;

    @IsString()
    medium:string;

    @IsString()
    artist:string;

    @IsBoolean()
    domesticShipping:boolean;

    @IsNumber()
    offerLocalPickup:number;

    @IsBoolean()
    domesticFreeShipping:boolean;

    @IsBoolean()
    internationalShipping:boolean;

    @IsBoolean()
    internationalFreeShipping:boolean;

    @IsNumber()
    shippingCost:number;

    @IsString()
    itemLocation:string;

    @IsNumber()
    price:number;

    @IsNumber()
    startingPrice:number;

    @IsNumber()
    reserverdPrice:number;

    paymentOptions:PaymentOption[];

    @IsNumber()
    salesTax:number;

    @IsBoolean()
    returnDomestic:boolean;

    @IsBoolean()
    returnInternational:boolean;


}