import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoMesaController } from './tipo_mesa.controller';
import { TipoMesa } from './tipo_mesa.entity';
import { TipoMesaService } from './tipo_mesa.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoMesa])],
  controllers: [TipoMesaController],
  providers: [TipoMesaService],
})
export class TipoMesaModule {}
