import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GenericController } from 'src/generics/generic.controller';
import { GuarnicionService } from './guarnicion.service';
import { Guarnicion } from './guarnicion.entity';

@Controller('guarnicion')
@ApiTags('guarnicion')
export class GuarnicionController extends GenericController<
  Guarnicion,
  GuarnicionService
> {
  constructor(private readonly GuarnicionService: GuarnicionService) {
    super(GuarnicionService);
  }
}
