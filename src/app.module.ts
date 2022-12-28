import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CombosModule } from './combos/combos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { UnidadesModule } from './unidades/unidades.module';
import { TipoPagosModule } from './tipo_pagos/tipo_pagos.module';
import { CategoriaMermaModule } from './categoria_merma/categoria_merma.module';
import { InsumosModule } from './insumos/insumos.module';
import { EquivalenciasMedidasModule } from './equivalencias_medidas/equivalencias_medidas.module';
import { ClienteModule } from './cliente/cliente.module';
import { AreaRestauranteModule } from './area_restaurante/area_restaurante.module';
import { TipoMesaModule } from './tipo_mesa/tipo_mesa.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',

      host: 'containers-us-west-161.railway.app',
      port: 6726,
      database: 'railway',
      username: 'postgres',
      password: '4lSE8VPWtBuxQD9l9ppQ',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CombosModule,
    ServiciosModule,
    UnidadesModule,
    TipoPagosModule,
    CategoriaMermaModule,
    InsumosModule,
    EquivalenciasMedidasModule,
    ClienteModule,
    AreaRestauranteModule,
    TipoMesaModule,
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
