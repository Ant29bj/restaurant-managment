import { Module } from '@nestjs/common';
import { EquivalenciasMedidasService } from './equivalencias_medidas.service';
import { EquivalenciasMedidasController } from './equivalencias_medidas.controller';

@Module({
  providers: [EquivalenciasMedidasService],
  controllers: [EquivalenciasMedidasController]
})
export class EquivalenciasMedidasModule {}
