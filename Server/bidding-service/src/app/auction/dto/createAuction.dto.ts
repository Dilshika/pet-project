/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAuctionDto{

    @IsString()
    @IsNotEmpty()
    public readonly name:string;

    @IsString()
    @IsNotEmpty()
    public readonly sellerId:string;

    @IsDate()
    @IsNotEmpty()
    public readonly startAt:Date;

    @IsDate()
    @IsNotEmpty()
    public readonly expiresAt:Date;

    @IsNumber()
    public readonly highestBid:number;

    @IsString()
    public readonly winnerId:string;

    @IsNumber()
    version:number;

    @IsDate()
    createAt:Date;
}