/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [PhotosModule,
  MulterModule.register({
    dest:'./upload',
  }),
  ConfigModule.forRoot({
    isGlobal:true
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
