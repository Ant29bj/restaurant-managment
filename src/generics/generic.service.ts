import {
  DeleteResult,
  FindManyOptions,
  FindOneOptions,
  InsertResult,
} from "typeorm";
import {
  QueryDeepPartialEntity,
  QueryPartialEntity,
} from "typeorm/query-builder/QueryPartialEntity";
import { Repository } from "typeorm";
import { GenericEntity } from "./generic.entity";

export abstract class GenericService<Entity extends GenericEntity> {
  constructor(private readonly repository: Repository<Entity>) {}

  create(
    entity: QueryPartialEntity<Entity> | QueryPartialEntity<Entity>[] | Entity
  ): Promise<InsertResult> {
    return this.repository.insert(entity as QueryDeepPartialEntity<Entity>);
  }

  find(options?: FindManyOptions<Entity>): Promise<Entity[]> {
    return this.repository.find(options);
  }

  findOne(options?: FindOneOptions<Entity>): Promise<Entity> {
    return this.repository.findOne(options);
  }

  findOneById(id): Promise<Entity> {
    return this.repository.findOne({ where: { id } });
  }

  async update(id, entity: any) {
    const info = await this.repository.findOne({ where: { id } }); //Buscamos el Dato
    this.repository.merge(info, entity); //Mezclamos la info obtenida con la entidad.
    return this.repository.save(info); //Actualizamos los Datos
  }

  delete(id: number): Promise<DeleteResult> {
    return this.repository.softDelete(id);
  }
}
