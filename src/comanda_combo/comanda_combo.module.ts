import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComandaCombo } from './comanda_combo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComandaCombo])],
  controllers: [],
  providers: [],
})
export class ComandaComboModule {}
