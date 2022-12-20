import { Module } from '@nestjs/common';
import { TipoPagosService } from './tipo_pagos.service';
import { TipoPagosController } from './tipo_pagos.controller';
import { TipoPagos } from './tipo_pagos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPagos])],
  providers: [TipoPagosService],
  controllers: [TipoPagosController],
})
export class TipoPagosModule {}
