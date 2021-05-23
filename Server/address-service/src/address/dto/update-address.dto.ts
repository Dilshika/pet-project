/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";


export class UpdateAddressDto{

    @IsString()
    readonly firstName:string;

    @IsString()
    readonly lastName:string;
    
    @IsString()
    readonly no:string;

    @IsString()
    readonly addressLine1:string;

    @IsString()
    readonly addressLine2:string;

    @IsString()
    readonly city:string;

    @IsString()
    readonly state:string;

    @IsString()
    readonly postCode:string;

    @IsString()
    readonly country:string;

    @IsString()
    readonly phone:string;


}