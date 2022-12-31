import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipios } from './municipios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Municipios])],
  controllers: [],
  providers: [],
})
export class MunicipioModule {}
