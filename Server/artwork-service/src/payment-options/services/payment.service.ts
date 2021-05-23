/* eslint-disable prettier/prettier */
import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreatePaymentDto } from "../dto/create-payment.dto";
import { PaymentOption } from "../model/payment-options.model";
import { PaymentOptionRepository } from "../repository/payment-options.repository";

@Injectable()
export class PaymentOptionService {
  
  constructor(private readonly repository:PaymentOptionRepository) {}

  async createPaymentOption(createOption:CreatePaymentDto):Promise<PaymentOption>{
    return await  this.repository.create(createOption);
    
  }

  async deletePaymentOption(name:string):Promise<any>{
    const option=this.repository.delete(name);
    if(!option){
      throw new NotFoundException();
    }
    return Logger.log('Successfully Deleted');
  }

  async findAll():Promise<PaymentOption[]>{
    const option=await this.repository.find();
    if(!option.length){
      throw new NotFoundException('Not Found');
    }
    return option;
  }

}
