/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateArtworkDto } from "../dto/create-artwork.dto";
import { Artwork, ArtworkDocument } from "../model/artwork.model";
import {  PaymentOptionsSchema } from 'src/payment-options/model/payment-options.model';
import * as mongoose from 'mongoose';


@Injectable()
export class ArtworkRepository{
    constructor(@InjectModel(Artwork.name) private artModel:Model<ArtworkDocument>){}

    async create(artworkDto:CreateArtworkDto):Promise<Artwork>{
        const artwork=new this.artModel(artworkDto);
        return await artwork.save();
    }

    async findByName(name:string):Promise<Artwork>{
        const Options= mongoose.model('Options',PaymentOptionsSchema);

        const artwork=await this.artModel.findOne({name:name}).
        populate({
            path:'options',
            model:Options
         });
        return artwork;
    }

    async delete(name:string){
        const art=this.artModel.deleteOne({name:name});
        return await art;
    }

    async find(id:string):Promise<Artwork>{
        const artwork=this.artModel.findById(id);
        return await artwork;
    }

    async findAll():Promise<Artwork[]>{
        const artworks=this.artModel.find().exec();
        return await artworks;
    }
}