import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';
import { GenericController } from 'src/generics/generic.controller';
import { Ubicacion } from './ubicacion.entity';
import { UbicacionService } from './ubicacion.service';
@UseGuards(JwtAuthGuard)

@Controller('ubicacion')
export class UbicacionController extends GenericController<
  Ubicacion,
  UbicacionService
> {
  constructor(private readonly ubicacionService: UbicacionService) {
    super(ubicacionService);
  }

  @Get('pag')
  @ApiBearerAuth()
  async Find(@Query('pag') pagina: number) {
    const offset = (pagina - 1) * 10;
    const data = this.ubicacionService.find({
      take: 10,
      skip: offset,
    });

    return data;
  }

  @Get(':cp')
  @ApiBearerAuth()
  FindOne(@Param('cp') cp: string) {
    return this.ubicacionService.find({
      where: {
        cp: cp,
      },
    });
  }
}
