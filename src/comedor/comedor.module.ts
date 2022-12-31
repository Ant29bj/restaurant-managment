import { Module } from '@nestjs/common';
import { ComedorService } from './comedor.service';
import { ComedorController } from './comedor.controller';
import { Comedor } from './comedor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Comedor])],

  providers: [ComedorService],
  controllers: [ComedorController],
})
export class ComedorModule {}
