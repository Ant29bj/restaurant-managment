import { Module } from '@nestjs/common';
import { FuncionalidadesService } from './funcionalidades.service';
import { FuncionalidadesController } from './funcionalidades.controller';
import { Funcionalidades } from './funcionalidades.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionalidades])],

  providers: [FuncionalidadesService],
  controllers: [FuncionalidadesController],
})
export class FuncionalidadesModule {}
