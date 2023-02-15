import { Module } from "@nestjs/common";
import { EnviromentSettings } from "./credentials.service";
import { SetupService } from "./setup.service";

@Module({
  providers: [SetupService],
  exports: [SetupService, EnviromentSettings],
})
export class SetupModule {}
