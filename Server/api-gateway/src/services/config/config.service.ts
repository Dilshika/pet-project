/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

@Injectable()
export class ConfigService {
    private readonly envConfig:{[key:string]:any}=null;

    constructor(){
        this.envConfig={};
        this.envConfig.port=process.env.API_GATEWAY_PORT;
        this.envConfig.authService={
            options:{
                port:process.env.AUTH_SERVICE_PORT,
                host:process.env.AUTH_SERVICE_HOST,
            },
            transport:Transport.TCP,
        };

        this.envConfig.userService={
            options:{
                port:process.env.USER_SERVICE_PORT,
                host:process.env.USER_SERVICE_HOST,
            },
            transport:Transport.TCP,
        }

    }

    get(key:string):any{
        return this.envConfig[key];
    }
}
