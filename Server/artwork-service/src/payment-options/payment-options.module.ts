/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentOptionsController } from './controller/payment-options.controller';
import { PaymentOption, PaymentOptionsSchema } from './model/payment-options.model';
import { PaymentOptionRepository } from './repository/payment-options.repository';
import { PaymentOptionService } from './services/payment.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PaymentOption.name,
        schema: PaymentOptionsSchema,
      },
    ]),
  ],
  providers:[PaymentOptionService,PaymentOptionRepository],
  controllers:[PaymentOptionsController]
})
export class PaymentOptionsModule {}
