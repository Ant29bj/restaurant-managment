import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesasController } from './mesa.controller';
import { Mesas } from './mesa.entity';
import { MesasService } from './mesa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Mesas])],
  controllers: [MesasController],
  providers: [MesasService],
})
export class MesaModule {}
