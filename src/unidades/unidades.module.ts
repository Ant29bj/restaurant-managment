import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
import { Unidades } from './unidades.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Unidades])],

  providers: [UnidadesService],
  controllers: [UnidadesController],
})
export class UnidadesModule {}
