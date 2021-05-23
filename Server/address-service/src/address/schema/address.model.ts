/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddressDocument = Address & Document;
@Schema()
export class Address{

    @Prop()
    userId:string;

    @Prop()
    firstName:string;

    @Prop()
    lastName:string;

    @Prop()
    no:string;

    @Prop()
    addressLine1:string;

    @Prop()
    addressLine2:string;

    @Prop()
    city:string;

    @Prop()
    state:string;

    @Prop()
    postCode:string;

    @Prop()
    country:string;

    @Prop()
    phone:string;
}

export const AddressSchema=SchemaFactory.createForClass(Address);