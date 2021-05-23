/* eslint-disable prettier/prettier */
import {Injectable, NotFoundException } from '@nestjs/common';
import { CreateArtworkDto } from '../dto/create-artwork.dto';
import { Artwork } from '../model/artwork.model';
import { ArtworkRepository } from '../repository/artwork.repository';


@Injectable()
export class ArtworkService {
    
    constructor(private readonly repository:ArtworkRepository){}

   
    async findArt(id:string){
        const art=this.repository.find(id);
        if(!art){
            throw new NotFoundException('Art cannot be found');
        }
        return art;
    }

    async createArt(artwork:CreateArtworkDto){
        return await this.repository.create(artwork);
    }


    async deleteArtwork(name:string){
        const art=this.repository.delete(name);
        if(!art){
            throw new NotFoundException('Artwork cannot be found to delete');
        }
    }

    async findAll():Promise<Artwork[]>{
        const artworks=await this.repository.findAll();
        if(!artworks.length){
            throw new NotFoundException('Artwork not Found');
        }
        return artworks;
    }

    async findByName(name:string):Promise<Artwork>{
        const artwork=await this.repository.findByName(name);
        if(artwork===null){
            throw new NotFoundException('Artwork not Found');
        }
        return artwork;
    }

}
