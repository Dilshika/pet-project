/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreatePaymentDto{

    @IsString()
    name:string;

}