import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/generics/generic.service';
import { Repository } from 'typeorm';
import { Guarnicion } from './guarnicion.entity';

@Injectable()
export class GuarnicionService extends GenericService<Guarnicion> {
  constructor(
    @InjectRepository(Guarnicion)
    private readonly guarnicionRepository: Repository<Guarnicion>,
  ) {
    super(guarnicionRepository);
  }
}
