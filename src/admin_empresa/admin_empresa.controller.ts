import { Controller, UseGuards } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { AdminEmpresa } from './admin_empresa.entity';
import { AdminEmpresaService } from './admin_empresa.service';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('admin-empresa')
export class AdminEmpresaController extends GenericController<AdminEmpresa, AdminEmpresaService> {
    constructor(private readonly adminEmpresaService: AdminEmpresaService) {
        super(adminEmpresaService);
    }

}