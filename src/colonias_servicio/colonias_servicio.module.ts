import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ColoniasDeServicio } from "./colonias_service.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ColoniasDeServicio])],
})
export class ColoniasServicioModule {}
