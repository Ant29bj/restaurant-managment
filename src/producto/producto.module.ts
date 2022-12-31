import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './producto.controller';
import { Productos } from './producto.entity';
import { ProductosService } from './producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Productos])],
  controllers: [ProductController],
  providers: [ProductosService],
})
export class ProductoModule {}
