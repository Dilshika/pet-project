/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateAuctionDto{

    @IsNotEmpty()
    @IsString()
    public readonly winnerId:string;

    @IsNumber()
    @IsNotEmpty()
    public readonly highestBid:number;

    @IsDate()
    createAt:Date;

}