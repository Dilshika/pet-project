/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreatePaymentDto } from "../dto/create-payment.dto";
import { PaymentOption, PaymentOptionDocument } from "../model/payment-options.model";

@Injectable()
export class PaymentOptionRepository{
    constructor(@InjectModel(PaymentOption.name) private optionModel:Model<PaymentOptionDocument>){}

    async create(createOptionDto:CreatePaymentDto):Promise<PaymentOption>{
        const newOption= new this.optionModel(createOptionDto);
        return await newOption.save();
    }

    async delete(name:string){
        const option=this.optionModel.deleteOne({name:name})
        return await option;
    }

    async find():Promise<PaymentOption[]>{
        const options=this.optionModel.find().exec();
        return await options;
    }
}