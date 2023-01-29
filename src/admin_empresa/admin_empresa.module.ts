import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEmpresa } from './admin_empresa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEmpresa])],
})
export class AdminEmpresaModule {}
