/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateAddressDto } from '../dto/create-address.input';
import { UpdateAddressDto } from '../dto/update-address.dto';
import { Address } from '../schema/address.model';
import { AddressRepository } from '../repository/address.repository';



@Injectable()
export class AddressService {
  
  constructor(private readonly repository:AddressRepository){}

  
  async saveAddress(createAdd:CreateAddressDto):Promise<Address>{
    return await this.repository.create(createAdd);
  }

  async findByID(id:string):Promise<Address>{
    const address= await this.repository.findById(id);
    if(!address){
      throw new NotFoundException('Address Not found');
    }
    return address;
  }
  
  async findAllByUserId(id:string):Promise<Address[]>{
    
    const address= await this.repository.findAll(id);

      if(!address.length){
        throw new NotFoundException('No Address Found');
      }
    return address;
  }
  
  
  
  async updateAddress(id:string,address:UpdateAddressDto):Promise<Address>{
    const existaddress= await this.repository.update(id,address);
     return existaddress;
  }

  
  async deleteAddress(id:string):Promise<Address>{
    const deleteAddress= await this.repository.delete(id);
    return deleteAddress;
  }
}