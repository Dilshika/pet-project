/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AddressController } from './address/controllers/address.controller';
import { AddressService } from './address/services/address.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressSchema,Address} from './address/schema/address.model';
import { AddressRepository } from './address/repository/address.repository';

@Module({
  imports:[MongooseModule.forFeature([{name:Address.name,schema:AddressSchema}])],
  controllers: [AddressController],
  providers: [AddressService,AddressRepository],
})
export class AddressModule {}
