import { Module } from '@nestjs/common';
import { DiasHabilesService } from './dias_habiles.service';
import { DiasHabilesController } from './dias_habiles.controller';
import { DiasHabiles } from './dias_habiles.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DiasHabiles])],
  providers: [DiasHabilesService],
  controllers: [DiasHabilesController],
})
export class DiasHabilesModule {}
