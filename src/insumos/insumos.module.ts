import { Module } from '@nestjs/common';
import { InsumosService } from './insumos.service';
import { InsumosController } from './insumos.controller';
import { Insumos } from './insumos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Insumos])],

  providers: [InsumosService],
  controllers: [InsumosController]
})
export class InsumosModule { }
