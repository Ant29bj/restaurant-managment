import { Module } from '@nestjs/common';
import { DetalleRecetaService } from './detalle_receta.service';
import { DetalleRecetaController } from './detalle_receta.controller';
import { DetalleReceta } from './detalle_receta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleReceta])],

  providers: [DetalleRecetaService],
  controllers: [DetalleRecetaController],
})
export class DetalleRecetaModule {}
