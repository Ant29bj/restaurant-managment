import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

export class ClienteService extends GenericService<Cliente> {
  constructor(
    @InjectRepository(Cliente) private clienteRepo: Repository<Cliente>,
  ) {
    super(clienteRepo);
  }
}
