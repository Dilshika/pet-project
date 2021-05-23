/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AddressModule } from './address.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AddressModule,
    MongooseModule.forRoot('mongodb://localhost/address'),
    ],
   
  })
export class AppModule {}
