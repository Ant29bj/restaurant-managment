import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proveedores } from './proveedores.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proveedores])],
  controllers: [],
  providers: [],
})
export class ProveedoresModule {}
