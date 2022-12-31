import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgrupacionController } from './agrupacion.controller';
import { Agrupacion } from './agrupacion.entity';
import { AgrupacionService } from './agrupacion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Agrupacion])],
  controllers: [AgrupacionController],
  providers: [AgrupacionService],
})
export class AgrupacionModule {}
