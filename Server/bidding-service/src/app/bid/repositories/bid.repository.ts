/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model} from "mongoose";
import { CreateBidDto } from "../dto/createBid.dto";
import { UpdateBidDto } from "../dto/updateBid.dto";
import { Bid, BidDocument } from "../schema/bid.schema";

@Injectable()
export class BidRepository {
    constructor(@InjectModel(Bid.name) private readonly bidModel:Model<BidDocument>){
    }

    async create(createBid:CreateBidDto):Promise<Bid>{
        const bid=new this.bidModel(createBid);
        return await bid.save();
    }

    async update(auctionId:string,userId:string,updateBid:UpdateBidDto):Promise<Bid>{
        const bid=this.bidModel.findOneAndUpdate({auctionId:auctionId,userId:userId},updateBid);
        return await bid;
    }

    async getBid(auctionId:string,userId:string):Promise<Bid>{
        console.log(auctionId);
        const bid=this.bidModel.findOne({auctionId:auctionId,userId:userId});
        return await bid;
    }

    async getBidByAuction(auctionId:string):Promise<Bid[]>{
        return await this.bidModel.find({auctionId:auctionId}).exec();
    }
}