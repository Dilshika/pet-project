/* eslint-disable prettier/prettier */
import { Controller, Post,Body,  Logger, NotFoundException, Get, Param, Delete, BadRequestException} from '@nestjs/common';
import { ArtworkService } from '../service/artwork.service';
import { CreateArtworkDto } from '../dto/create-artwork.dto';



@Controller('artwork')
export class ArtworkController {

    constructor(private readonly artworkService:ArtworkService){}

    @Get(":id")
    async findArt(@Param('id') id:string){
        return await this.artworkService.findArt(id).catch(
            error=>{
                Logger.log(error);
                throw new NotFoundException();
            }
        );
    }


    @Post('create')
    async createart(@Body() artwork:CreateArtworkDto){
        return await this.artworkService.createArt(artwork).catch(
            error=>{
                Logger.log(error);
                throw new BadRequestException();
            }
        );
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        return await this.artworkService.deleteArtwork(id).catch(
            error=>{
                Logger.log(error);
                throw new BadRequestException();
            }
        )
    }

    @Get()
    async findAll(){
        return await this.artworkService.findAll().catch(
            error=>{
                Logger.log(error);
                throw new NotFoundException();
            }
        )
    }


    @Get('name/:name')
    async findByName(@Param('name') name:string){
        return await this.artworkService.findByName(name).catch(
            error=>{
                Logger.log(error);
                throw new NotFoundException();
            }
        )
    }

}
