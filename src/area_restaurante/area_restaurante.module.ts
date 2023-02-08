import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AreaRestauranteController } from "./area_restaurante.controller";
import { AreaRestaurante } from "./area_restaurante.entity";
import { AreaRestauranteService } from "./area_restaurante.service";

@Module({
  imports: [TypeOrmModule.forFeature([AreaRestaurante])],
  controllers: [AreaRestauranteController],
  providers: [AreaRestauranteService],
})
export class AreaRestauranteModule {}
