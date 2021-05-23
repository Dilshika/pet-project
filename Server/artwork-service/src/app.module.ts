/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtworkModule } from './artwork/artwork.module';
import { PaymentOptionsModule } from './payment-options/payment-options.module';

@Module({
  imports: [ArtworkModule,
  MongooseModule.forRoot('mongodb://localhost/artwork',{ useNewUrlParser: true }),
  PaymentOptionsModule],
 
})
export class AppModule {}
