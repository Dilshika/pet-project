/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateAuctionDto } from "../dto/createAuction.dto";
import { UpdateAuctionDto } from "../dto/updateAuction.dto";
import { Status } from "../schema/auction.enum";
import { Auction, AuctionDocument } from "../schema/auction.schema";

@Injectable()
export class AuctionRepository{
    constructor(@InjectModel(Auction.name) private readonly auctionModel:Model<AuctionDocument>){}

    async create(auctionData:CreateAuctionDto):Promise<Auction>{
        const auction= await new this.auctionModel(auctionData);
        console.log(auction);
        if(auction.startAt===new Date()){
            auction.status=Status.ACTIVE;
        }
        else{
            auction.status=Status.INACTIVE;

        }
        return await auction.save();
    }

    async getById(id:string):Promise<Auction>{
        const auction=this.auctionModel.findById(id);
        return await auction;
    }

    async update(id:string,auctionData:UpdateAuctionDto):Promise<Auction>{
        const updateAuction=await this.auctionModel.findByIdAndUpdate({_id:id},{highestBid:auctionData.highestBid,winnerId:auctionData.winnerId});
        return await updateAuction;
    }

    async findAll():Promise<Auction[]>{
        const all=this.auctionModel.find().exec();
        return all;
    }

    async updateStatus(id,status:Status):Promise<Auction>{
        return await this.auctionModel.findOneAndUpdate({id:id},{status:status});
    }


}