import { Module } from '@nestjs/common';
import { CategoriaProductosService } from './categoria_productos.service';
import { CategoriaProductosController } from './categoria_productos.controller';
import { CategoriaProductos } from './categoria_productos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaProductos])],

  providers: [CategoriaProductosService],
  controllers: [CategoriaProductosController],
})
export class CategoriaProductosModule {}
