/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/service/user.service';
import { User } from 'src/user/model/user.model';

@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService,
        private userService:UserService){}

    //validate user
    async validateUser(email:string,password:string):Promise<User>{
        try{
            const user=await this.userService.getUserByEmail(email);
            if(compareSync(password,user?.password)){
                return user;
            }
            return null;
        }catch(error){
            Logger.log(error);
            throw error;
        }
   }


   //signin
   async login(users:User){
       const user=this.userService.getUserByEmail(users.email);
        if(!user){
            throw new BadRequestException('Invalid Credintials');
        }

        const payload={id:(await user).username};
        console.log(payload);

        return {
           username:(await user).username,
           accesssToken:this.jwtService.sign(payload)
       };
   }
        
   //validate token
   validateToken(jwt:string){
       return this.jwtService.verify(jwt);
   }

   
   

}