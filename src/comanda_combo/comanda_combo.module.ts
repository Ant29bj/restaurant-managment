import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComandaCombosController } from './comanda_combo.controller';
import { ComandaCombo } from './comanda_combo.entity';
import { ComandaCombosService } from './comanda_combo.service';

@Module({
  imports: [TypeOrmModule.forFeature([ComandaCombo])],
  controllers: [ComandaCombosController],
  providers: [ComandaCombosService],
})
export class ComandaComboModule {}
