import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComboDetalleController } from './combo_detalle.controller';
import { ComboDetalle } from './combo_detalle.entity';
import { ComboDetalleService } from './combo_detalle.service';

@Module({
  imports: [TypeOrmModule.forFeature([ComboDetalle])],
  controllers: [ComboDetalleController],
  providers: [ComboDetalleService],
})
export class ComboDetalleModule {}
