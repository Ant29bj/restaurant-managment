import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CombosController } from './combos.controller';
import { Combos } from './combos.entity';
import { CombosService } from './combos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Combos])],
  controllers: [CombosController],
  providers: [CombosService],
})
export class CombosModule {}
