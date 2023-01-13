import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';

import { GenericController } from 'src/generics/generic.controller';
import { GuarnicionService } from './guarnicion.service';
import { Guarnicion } from './guarnicion.entity';
import { GuarnicionCreateDto } from './dto/guarnicion.dto';

@Controller('guarnicion')
@ApiTags('guarnicion')
export class GuarnicionController extends GenericController<
  Guarnicion,
  GuarnicionService
> {
  constructor(private readonly GuarnicionService: GuarnicionService) {
    super(GuarnicionService);
  }

  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: GuarnicionCreateDto, required: true })
  async create(@Body() entity: Guarnicion) {
    return this.GuarnicionService.create(entity);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  @ApiBody({ type: GuarnicionCreateDto, required: true })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() entity: Guarnicion,
  ) {
    return this.GuarnicionService.update(id, entity);
  }
}
