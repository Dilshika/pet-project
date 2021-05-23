/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Get, Logger, NotFoundException, Param, Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CreateAuctionDto } from './auction/dto/createAuction.dto';
import { CreateBidDto } from './bid/dto/createBid.dto';


@Controller('auction')
export class AppController {

    constructor(private readonly appService:AppService){}

    @Post('bid')
    async createBid(@Body() input:CreateBidDto){
        return this.appService.createBid(input).catch(
            error=>{
                Logger.log(error);
                throw new BadRequestException();
            }
        )
    }

    @Post('create')
    async createAuction(@Body() input:CreateAuctionDto){
        return this.appService.createAuction(input).catch(
            error=>{
                Logger.log(error);
                throw new BadRequestException();
            }
        )
    }


    @Get(':id')
    async getById(@Param('id') id:string){
        return this.appService.getById(id).catch(
            error=>{
                Logger.log(error);
                throw new NotFoundException();
            }
        )
    }

    @Get()
    async getAuctions(){
        return this.appService.findAll().catch(
            error=>{
                Logger.log(error);
                throw new NotFoundException();
            }
        )
    }

 
}
