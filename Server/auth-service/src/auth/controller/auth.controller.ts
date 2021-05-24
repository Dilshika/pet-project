/* eslint-disable prettier/prettier */
import {  Controller,Request,Post, UseGuards, Logger, Body, Get, Param} from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AuthService } from '../service/auth.service';
import { CreateUserDto } from '../../user/dto/create-user.dto';
import { UserService } from '../../user/service/user.service';

import { AuthGuard } from '@nestjs/passport';

@Controller('auth')

export class AuthController {

    constructor(private authService:AuthService,private readonly userService:UserService){}


    //user registration
    @EventPattern('user_created')
    @Post('signup')
    async registerUser(@Body() userBody:CreateUserDto){
        try{
            return  this.userService.create(userBody);
        }
        catch(error){
            console.log(error);
            throw error;

        }
    }

    //login user
    @UseGuards(AuthGuard('local'))
    @Post('signin')
    async login(@Body() req){
        return this.authService.login(req);
    }



}
