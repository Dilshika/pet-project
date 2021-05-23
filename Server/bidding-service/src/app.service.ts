/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { CreateAuctionDto } from "./app/auction/dto/createAuction.dto";
import { UpdateAuctionDto } from "./app/auction/dto/updateAuction.dto";
import { AuctionRepository } from "./app/auction/repository/auction.repository";
import { Status } from "./app/auction/schema/auction.enum";
import { Auction } from "./app/auction/schema/auction.schema";
import { CreateBidDto } from "./app/bid/dto/createBid.dto";
import { BidRepository } from "./app/bid/repositories/bid.repository";


@Injectable()
export class AppService{
    constructor(private auctionRepository:AuctionRepository,
        private readonly bidRepository:BidRepository){}


    async createAuction(auctionData:CreateAuctionDto):Promise<Auction>{
        const auction=this.auctionRepository.create(auctionData);
        return await auction;
    }
    

    async UpdateAuction(id:string,auctionData:UpdateAuctionDto){
        await this.checkIfActive(id);
        const auction= await this.auctionRepository.getById(id);
;
        if(await auction){
            if(auction.status==='active'){
                if(auction.highestBid<auctionData.highestBid){
                    const {highestBid,winnerId,createAt}=auctionData;
                    await this.auctionRepository.update(id,{highestBid,winnerId,createAt});
                    Logger.log('Successfully Updated')
                }
                return auction;
           }
            if(auction.status===Status.INACTIVE){
                throw new BadRequestException('Auction is Inactive');
           }
            else {
                throw new BadRequestException('Auction Expires');}
        }
       throw new NotFoundException('Auction not found');
        
    }



    async checkIfActive(id:string){
        const auction=await this.auctionRepository.getById(id);
        const now=new Date();
        console.log(now);

       if(auction.startAt===now){
           const status=Status.ACTIVE;
        await this.auctionRepository.updateStatus(id,status);
       }
       if(auction.expiresAt===now){
           const status=Status.EXPIRES;
        await this.auctionRepository.updateStatus(id,status);
       }

    }

    async getById(auctionId:string):Promise<Auction>{
        return this.auctionRepository.getById(auctionId);
    }

    async createBid(bidData:CreateBidDto){
        const exists=await this.bidRepository.getBid(bidData.auctionId,bidData.userId);
        if(!exists){
            bidData.version=1;
             console.log(this.bidRepository.create(bidData));
             this.UpdateAuction(bidData.auctionId,{winnerId:bidData.userId,highestBid:bidData.amount,createAt:bidData.createAt})
        }else{
            const version=(exists.version +1);
            this.bidRepository.update(bidData.auctionId,bidData.userId,{amount:bidData.amount,createAt:bidData.createAt,version:version});
            this.UpdateAuction(bidData.auctionId,{winnerId:bidData.userId,highestBid:bidData.amount,createAt:bidData.createAt})
        }
        

    }

    async findAll():Promise<Auction[]>{
        const auctions=await this.auctionRepository.findAll();
        if(!auctions.length){
            throw new NotFoundException();
        }
        return auctions;
    }
    
}