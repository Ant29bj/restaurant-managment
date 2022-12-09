import {
  Post,
  Body,
  Get,
  Query,
  Param,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { FindManyOptions } from 'typeorm';
import { GenericEntity } from './generic.entity';
import { GenericService } from './generic.service';

export abstract class GenericController<
  Entity extends GenericEntity,
  Service extends GenericService<Entity>,
> {
  constructor(private readonly service: Service) {}

  @Post()
  @ApiBearerAuth()
  async create(@Body() entity: Entity) {
    return this.service.create(entity);
  }

  @Get()
  @ApiBearerAuth()
  async find(@Query() options?: FindManyOptions<Entity>) {
    return this.service.find({ ...options });
  }

  @Get(':id')
  @ApiBearerAuth()
  async findOne(@Param('id') id: number) {
    return this.service.findOneById(id);
  }

  @Put(':id')
  @Patch(':id')
  @ApiBearerAuth()
  async update(@Param('id') id: number, @Body() entity: Entity) {
    if (id != entity.id) return;
    return this.service.update(id, entity);
  }

  @Delete(':id')
  @ApiBearerAuth()
  async delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
