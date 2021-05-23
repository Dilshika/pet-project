/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory,Schema} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { Category, Culture, SubCategory } from './artwork.enum';
import * as mongoose from 'mongoose';
import { PaymentOption } from 'src/payment-options/model/payment-options.model';


export type ArtworkDocument=Artwork & Document;

@Schema()
export class Artwork{
   
    @Prop({required:true})
    name:string;

    @Prop({enum:Category})
    category:Category;

    @Prop({enum:SubCategory})
    subcategory:SubCategory;

    @Prop({enum:Culture})
    culture:Culture;

    @Prop({required:true})
    sellerId:string;

    @Prop()
    features:string;

    @Prop()
    origin:string;

    @Prop()
    qualityType:string;

    @Prop()
    description:string;

    @Prop()
    year:string;

    @Prop()
    medium:string;

    @Prop()
    artist:string;

    @Prop()
    domesticShipping:boolean;

    @Prop()
    offerLocalPickup:number;

    @Prop()
    domesticFreeShipping:boolean;

    @Prop()
    internationalShipping:boolean;

    @Prop()
    internationalFreeShipping:boolean;

    @Prop()
    shippingCost:number;

    @Prop()
    itemLocation:string;

    @Prop()
    price:number;

    @Prop()
    startingPrice:number;

    @Prop()
    reserverdPrice:number;

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:PaymentOption.name})
    paymentOptions:mongoose.Schema.Types.ObjectId[];

    @Prop()
    salesTax:number;

    @Prop()
    returnDomestic:boolean;

    @Prop()
    returnInternational:boolean;


}

export const ArtworkSchema=SchemaFactory.createForClass(Artwork);