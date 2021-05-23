/* eslint-disable prettier/prettier */
import { BadRequestException, Controller,  Logger,  Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';


@Controller('photos')
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Post('/save')
 @UseInterceptors(FileInterceptor('file'))
 async uploadImage(@Req() request,@Res() response){
  return await this.appService.fileUpload(request,response).catch(
    error=>{
      Logger.log(error);
      throw new BadRequestException();
    }
  )
 }
}
