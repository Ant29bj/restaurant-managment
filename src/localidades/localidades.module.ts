import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Localidades } from './localidades.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Localidades])],
})
export class LocalidadesModule {}
