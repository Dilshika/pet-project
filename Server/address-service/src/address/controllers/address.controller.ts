/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put,Res } from '@nestjs/common';
import { Address } from '../schema/address.model';
import { UpdateAddressDto } from '../dto/update-address.dto';
import { AddressService } from '../services/address.service';

@Controller('api/address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get(':id')
  async findAllById(@Param('id') id:string, @Res() res):Promise<Address[]>{
    const address=await this.addressService.findAllByUserId(id);
    if(!address.length){
      throw new NotFoundException("Address Doesn't Exist");
    }
    else return res.status(HttpStatus.OK).json(address);
  }


  @Post('create')
  async save(@Body() address:Address, @Res() res):Promise<Address>{
    try{
    const createadd= await this.addressService.saveAddress(address);
    return res.status(HttpStatus.OK).json({
      message:'Address saved sucessfully!',
      createadd,
    })
    }catch(err){
      return res.status(HttpStatus.BAD_REQUEST).json({
        message:'Error: cannot save',
        status:400,
      })
    }
  }

  @Put('update/:id')
  async update(@Param('id') id:string, @Body() address:UpdateAddressDto,@Res() res){
    try{
    const updateAdd= await this.addressService.updateAddress(id,address);
        if(!updateAdd){
           throw new NotFoundException('Address does not exist');
          }
        return res.status(HttpStatus.OK).json({
            message:'Successfully updated',
            updateAdd,
        });
    }catch(err){
        res.status(HttpStatus.BAD_REQUEST).json({
          message:'Error',
          status:400,
        })
    }
  }

  @Delete('delete/:id')
  async delete(@Param('id') id:string, @Res() res):Promise<Address>{
    if(!id){
      throw new NotFoundException('Id doesnot exists');
    }
    const deleteAdd= await this.addressService.deleteAddress(id);

    if(!deleteAdd){
      throw new NotFoundException("Address doen't exist");
    }
    return res.status(HttpStatus.OK).json({
      message:'Successfully deleted',
    })
  }

}
