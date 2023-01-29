import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as yaml from 'yamljs';

@Injectable()
export class SetupService implements TypeOrmOptionsFactory {
  private readonly file;
  constructor() {
    this.file = yaml.load('config.yml');
  }
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.file.db.type,
      host: this.file.db.host,
      port: this.file.db.port,
      database: this.file.db.database,
      username: this.file.db.username,
      password: this.file.db.password,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: this.file.db.synchronize,
    };
  }
}
