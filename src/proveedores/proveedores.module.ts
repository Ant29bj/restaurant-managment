import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedoresController } from './proveedores.controller';
import { Proveedores } from './proveedores.entity';
import { ProveedoresService } from './proveedores.service';

@Module({
  imports: [TypeOrmModule.forFeature([Proveedores])],
  controllers: [ProveedoresController],
  providers: [ProveedoresService],
})
export class ProveedoresModule {}
