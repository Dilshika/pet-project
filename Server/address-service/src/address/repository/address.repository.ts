/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address, AddressDocument } from '../schema/address.model';
import { CreateAddressDto } from '../dto/create-address.input';
import { UpdateAddressDto } from '../dto/update-address.dto';

@Injectable()
export class AddressRepository {
  constructor(
    @InjectModel(Address.name) private addressModel: Model<AddressDocument>
  ) {}

  async create(createDto: CreateAddressDto): Promise<Address> {
    const address = new this.addressModel(createDto);
    return await address.save();
  }

  async findById(id:string):Promise<Address>{
      const address= this.addressModel.findById(id);
      return await address;
  }

  async findAll(userId:string):Promise<Address[]>{
      const addresses=this.addressModel.find({userId:userId}).exec();
      return addresses;
  }

  async update(id:string,addressDto:UpdateAddressDto):Promise<Address>{
      const address= this.addressModel.findByIdAndUpdate(id,addressDto);
      return await address;
  }

  async delete(id:string):Promise<Address>{
      const address=this.addressModel.findByIdAndDelete(id);
      return address;
  }
}
