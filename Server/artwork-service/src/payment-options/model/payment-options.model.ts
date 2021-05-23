/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';

export type PaymentOptionDocument=PaymentOption & Document;

@Schema()
export class PaymentOption {
    @Prop()
    name:string;
}

export const PaymentOptionsSchema=SchemaFactory.createForClass(PaymentOption);

