/* eslint-disable prettier/prettier */
import {IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class UpdateBidDto{

    @IsNumber()
    @IsNotEmpty()
    amount:number;

    @IsDate()
    createAt:Date;

    @IsNumber()
    version:number;
}