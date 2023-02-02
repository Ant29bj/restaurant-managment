import { Module } from "@nestjs/common";
import { RepresentanteLegalService } from "./representante_legal.service";

@Module({
  providers: [RepresentanteLegalService],
})
export class RepresentanteLegalModule {}
