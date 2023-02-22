import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEmpresa } from "./admin_empresa.entity";
import { AdminEmpresaService } from './admin_empresa.service';
import { AdminEmpresaController } from './admin_empresa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEmpresa])],
  providers: [AdminEmpresaService],
  controllers: [AdminEmpresaController],
  exports: [AdminEmpresaService],
})
export class AdminEmpresaModule { }
