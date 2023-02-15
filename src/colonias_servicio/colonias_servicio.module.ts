import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ColoniasDeServicio } from "./colonias_service.entity";
import { ColoniasServicioService } from './colonias_servicio.service';
import { ColoniasServicioController } from './colonias_servicio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ColoniasDeServicio])],
  providers: [ColoniasServicioService],
  controllers: [ColoniasServicioController],
})
export class ColoniasServicioModule {}
