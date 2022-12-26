import { Module } from '@nestjs/common';
import { ComandaService } from './comanda.service';
import { ComandaController } from './comanda.controller';
import { Comanda } from './comanda.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comanda])],

  providers: [ComandaService],
  controllers: [ComandaController],
})
export class ComandaModule {}
