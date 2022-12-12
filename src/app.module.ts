import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CombosModule } from './combos/combos.module';
import { ClienteModule } from './cliente/cliente.module';
import { AreaRestauranteModule } from './area_restaurante/area_restaurante.module';
import { TipoMesaModule } from './tipo_mesa/tipo_mesa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-106.railway.app',
      port: 6943,
      database: 'railway',
      username: 'postgres',
      password: 'IvNBTbp0QDAr3CAvoaVK',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CombosModule,
    ClienteModule,
    AreaRestauranteModule,
    TipoMesaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
