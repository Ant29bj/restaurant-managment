import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasController } from './empresas.controller';
import { Empresas } from './empresas.entity';
import { EmpresasService } from './empresas.service';

@Module({
  imports: [TypeOrmModule.forFeature([Empresas])],
  controllers: [EmpresasController],
  providers: [EmpresasService],
})
export class EmpresasModule {}
