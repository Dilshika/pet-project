/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from 'src/app.service';
import { AuctionRepository } from './auction/repository/auction.repository';
import { BidRepository } from './bid/repositories/bid.repository';
import { Auction, AuctionSchema } from './auction/schema/auction.schema';
import { Bid, BidSchema } from './bid/schema/bid.schema';




@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/auction'),
    MongooseModule.forFeature([{
      name:Auction.name,
      schema:AuctionSchema
  }]),
  MongooseModule.forFeature([{name:Bid.name, schema:BidSchema}]),
  ],
  controllers: [AppController],
  providers: [AppService,AuctionRepository,BidRepository],
  })
export class AppModule {}
