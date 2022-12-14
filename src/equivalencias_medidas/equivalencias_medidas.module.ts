import { Module } from '@nestjs/common';
import { EquivalenciasMedidasService } from './equivalencias_medidas.service';
import { EquivalenciasMedidasController } from './equivalencias_medidas.controller';
import { EquivalenciasMedidas } from './equivalencias_medidas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EquivalenciasMedidas])],
  providers: [EquivalenciasMedidasService],
  controllers: [EquivalenciasMedidasController],
})
export class EquivalenciasMedidasModule {}
