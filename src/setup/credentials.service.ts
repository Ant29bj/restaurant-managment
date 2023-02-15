import { Injectable } from "@nestjs/common";
import * as yaml from "yamljs";

@Injectable()
export class EnviromentSettings {
  private readonly secretKey: any;

  constructor() {
    this.secretKey = yaml.load("config.yml");
  }

  getJwtKeys() {
    return this.secretKey.auth.key;
  }
}
