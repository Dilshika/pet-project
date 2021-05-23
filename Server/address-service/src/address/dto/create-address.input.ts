/* eslint-disable prettier/prettier */
import { IsNotEmpty,IsString } from "class-validator";

export class CreateAddressDto{
    @IsString()
    @IsNotEmpty()
    readonly userId:string;

    @IsString()
    @IsNotEmpty()
    readonly firstName:string;
    
    @IsString()
    @IsNotEmpty()
    readonly lastName:string;

    @IsString()
    readonly no:string;

    @IsString()
    readonly addressLine1:string;

    @IsString()
    readonly addressLine2:string;

    @IsString()
    @IsNotEmpty()
    readonly city:string;

    @IsString()
    readonly state:string;

    @IsString()
    readonly postCode:string;

    @IsString()
    @IsNotEmpty()
    readonly country:string;
    
    @IsString()
    @IsNotEmpty()
    readonly phone:string;




}