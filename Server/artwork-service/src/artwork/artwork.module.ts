/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ArtworkService } from './service/artwork.service';
import { ArtworkController } from './controller/artwork.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Artwork, ArtworkSchema } from './model/artwork.model';
import { ArtworkRepository } from './repository/artwork.repository';


@Module({
  providers: [ArtworkService,ArtworkRepository],
  imports:[
    MongooseModule.forFeature([{
    name:Artwork.name,
    schema:ArtworkSchema
  }])],
  controllers:[ArtworkController]
})
export class ArtworkModule {}
