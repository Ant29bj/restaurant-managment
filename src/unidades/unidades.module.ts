import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
import { Unidades } from './unidades.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquivalenciasMedidasModule } from 'src/equivalencias_medidas/equivalencias_medidas.module';

@Module({
  imports: [TypeOrmModule.forFeature([Unidades]), EquivalenciasMedidasModule],

  providers: [UnidadesService],
  controllers: [UnidadesController],
})
export class UnidadesModule {}
