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
import { ComandaModule } from './comanda/comanda.module';
import { ComandaProductosModule } from './comanda_productos/comanda_productos.module';
import { ComandaServiciosModule } from './comanda_servicios/comanda_servicios.module';
import { ComedorModule } from './comedor/comedor.module';
import { DetalleRecetaModule } from './detalle_receta/detalle_receta.module';
import { DiasHabilesModule } from './dias_habiles/dias_habiles.module';
import { EstadosModule } from './estados/estados.module';
import { FuncionalidadesModule } from './funcionalidades/funcionalidades.module';
import { ReservacionesModule } from './reservaciones/reservaciones.module';
import { RolDeFuncionalidadesModule } from './rol_de_funcionalidades/rol_de_funcionalidades.module';
import { SucursalesModule } from './sucursales/sucursales.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Reprobados13',
      database: 'restaurant',
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
    ComandaModule,
    ComandaProductosModule,
    ComandaServiciosModule,
    ComedorModule,
    DetalleRecetaModule,
    DiasHabilesModule,
    EstadosModule,
    FuncionalidadesModule,
    ReservacionesModule,
    RolDeFuncionalidadesModule,
    SucursalesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
