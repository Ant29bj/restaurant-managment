import { Module } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';
import { Estados } from './estados.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Estados])],

  providers: [EstadosService],
  controllers: [EstadosController],
})
export class EstadosModule {}
