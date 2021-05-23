/* eslint-disable prettier/prettier */
import {  BadRequestException, Body, Controller, Delete, Get, Logger, NotFoundException, Param, Post } from "@nestjs/common";
import { CreatePaymentDto } from "../dto/create-payment.dto";
import { PaymentOptionService } from "../services/payment.service";

@Controller('payment-options')
export class PaymentOptionsController{

    constructor(private paymentOptionService:PaymentOptionService){}

    @Get()
    async findByName(){
        return await this.paymentOptionService.findAll().catch(error=>{
            Logger.log(error);
            throw new NotFoundException();
        });

    }

    @Post('create')
    async createPaymentOption(@Body('newOption') newOption:CreatePaymentDto){
        return await this.paymentOptionService.createPaymentOption(newOption).catch(
            error=>{
                Logger.log(error);
                throw new BadRequestException();
            }
        );

    }

    @Delete(':name')
    async delete(@Param('name') name:string){
        return await this.paymentOptionService.deletePaymentOption(name).catch(
            error=>{
                Logger.log(error);
                throw new BadRequestException();
            }
        )
    }

}