/* eslint-disable prettier/prettier */
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBidDto{

    @IsString()
    @IsNotEmpty()
    public readonly auctionId:string;

    @IsString()
    @IsNotEmpty()
    public readonly userId:string;

    @IsEmail()
    public readonly email:string;

    @IsNotEmpty()
    @IsNumber()
    public readonly amount:number;

    @IsNumber()
    version:number;

    @IsDate()
    createAt:Date;

}