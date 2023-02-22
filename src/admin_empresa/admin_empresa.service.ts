import { Injectable } from '@nestjs/common';
import { AdminEmpresa } from './admin_empresa.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';

@Injectable()
export class AdminEmpresaService extends GenericService<AdminEmpresa> {
    constructor(@InjectRepository(AdminEmpresa) private readonly adminEmpresaRepository: Repository<AdminEmpresa>) {
        super(adminEmpresaRepository);
    }
}
