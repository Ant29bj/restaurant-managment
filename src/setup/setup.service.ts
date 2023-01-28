import { Injectable } from '@nestjs/common';
import * as yaml from 'yamljs';

@Injectable()
export class SetupService {
  private readonly config;

  constructor() {
    this.config = yaml.load('config.yml');
  }

  getTypeOrmConfig(): any {
    return {
      type: this.config.db.type,
      host: this.config.db.host,
      port: this.config.db.port,
      username: this.config.db.username,
      password: this.config.db.password,
      database: this.config.db.database,
      entities: this.config.db.entities,
      synchronize: this.config.db.synchronize,
    };
  }
}
