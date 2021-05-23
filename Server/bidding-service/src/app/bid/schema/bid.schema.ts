/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';


export type BidDocument=Bid & Document;

@Schema()
export class Bid{

    @Prop()
    auctionId:string;

    @Prop()
   
    userId:string;

    @Prop()
    email:string;

    @Prop()
    amount:number;

    @Prop({default:new Date()})
    createdAt:Date;

    @Prop()
    version:number;

}

export const BidSchema=SchemaFactory.createForClass(Bid);