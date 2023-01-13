import { Module } from '@nestjs/common';
import { SucursalesService } from './sucursales.service';
import { SucursalesController } from './sucursales.controller';
import { Sucursales } from './sucursales.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Sucursales])],
  providers: [SucursalesService],
  controllers: [SucursalesController],
})
export class SucursalesModule {}
