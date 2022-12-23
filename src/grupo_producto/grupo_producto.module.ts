import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrupoProductoController } from './grupo_producto.controller';
import { GrupoProducto } from './grupo_producto.entity';
import { GrupoProductoService } from './grupo_producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([GrupoProducto])],
  controllers: [GrupoProductoController],
  providers: [GrupoProductoService],
})
export class GrupoProductoModule {}
