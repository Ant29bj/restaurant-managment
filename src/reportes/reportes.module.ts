import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportesController } from './reportes.controller';
import { Reportes } from './reportes.entity';
import { ReportesService } from './reportes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reportes])],
  controllers: [ReportesController],
  providers: [ReportesService],
})
export class ReportesModule {}
