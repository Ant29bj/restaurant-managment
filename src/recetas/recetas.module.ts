import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecetasService } from './recetas.service';
import { Recetas } from './recetas.entity';
import { RecetasController } from './recetas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Recetas])],
  controllers: [RecetasController],
  providers: [RecetasService],
})
export class RecetasModule {}
