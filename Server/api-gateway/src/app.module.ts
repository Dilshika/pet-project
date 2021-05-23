/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClientProxyFactory } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [
  
  ],
  controllers: [AppController],
  providers: [ConfigService,
  {
    provide:'AUTH_SERVICE',
    useFactory:(configService:ConfigService)=>{
      const authServiceOptions=configService.get('authService');
      return ClientProxyFactory.create(authServiceOptions);
    }
  }],
})
export class AppModule {}
