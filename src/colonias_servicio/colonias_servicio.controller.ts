import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { ColoniasDeServicio } from './colonias_service.entity';
import { ColoniasServicioService } from './colonias_servicio.service';
@UseGuards(JwtAuthGuard)

@Controller('colonias-servicio')
export class ColoniasServicioController extends GenericController<
    ColoniasDeServicio,
    ColoniasServicioService
> {
    constructor(private readonly coloniaServicioService: ColoniasServicioService) {
        super(coloniaServicioService);
    }


}
