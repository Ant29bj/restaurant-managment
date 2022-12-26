import { Module } from '@nestjs/common';
import { RolDeFuncionalidadesService } from './rol_de_funcionalidades.service';
import { RolDeFuncionalidadesController } from './rol_de_funcionalidades.controller';
import { RolDeFuncionalidades } from './rol_de_funcionalidades.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RolDeFuncionalidades])],

  providers: [RolDeFuncionalidadesService],
  controllers: [RolDeFuncionalidadesController],
})
export class RolDeFuncionalidadesModule {}
