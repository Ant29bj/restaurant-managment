import { Module } from '@nestjs/common';
import { ComandaProductosService } from './comanda_productos.service';
import { ComandaProductosController } from './comanda_productos.controller';
import { ComandaProductos } from './comanda_productos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ComandaProductos])],

  providers: [ComandaProductosService],
  controllers: [ComandaProductosController],
})
export class ComandaProductosModule {}
