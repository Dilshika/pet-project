/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
import { Status } from "./auction.enum";

export type AuctionDocument=Auction & Document;

@Schema()
export class Auction {

    @Prop()
    name:string;

    @Prop()
    status:Status;

    @Prop()
    sellerId:string;

    @Prop()
    startAt?:Date;

    @Prop()
    expiresAt?:Date;

    @Prop()
    winnerId:string;

    @Prop()
    highestBid:number;

    @Prop()
    createAt:Date;

}

export const AuctionSchema=SchemaFactory.createForClass(Auction);