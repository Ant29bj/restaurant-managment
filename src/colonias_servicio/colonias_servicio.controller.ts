import { Controller } from '@nestjs/common';
import { GenericController } from 'src/generics/generic.controller';
import { ColoniasDeServicio } from './colonias_service.entity';
import { ColoniasServicioService } from './colonias_servicio.service';

@Controller('colonias-servicio')
export class ColoniasServicioController extends GenericController<
    ColoniasDeServicio,
    ColoniasServicioService
> {
    constructor(private readonly coloniaServicioService: ColoniasServicioService) {
        super(coloniaServicioService);
    }


}
