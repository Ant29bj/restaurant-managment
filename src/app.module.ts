import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CombosModule } from './combos/combos.module';
import { ClienteModule } from './cliente/cliente.module';
import { AreaRestauranteModule } from './area_restaurante/area_restaurante.module';
import { TipoMesaModule } from './tipo_mesa/tipo_mesa.module';
import { ImagesModule } from './images/images.module';
import { ComboDetalleModule } from './combo_detalle/combo_detalle.module';
import { ProductoModule } from './producto/producto.module';
import { EmpresasModule } from './empresas/empresas.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ComandaComboModule } from './comanda_combo/comanda_combo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'root',
      username: 'root',
      password: 'root',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CombosModule,
    ClienteModule,
    AreaRestauranteModule,
    TipoMesaModule,
    ImagesModule,
    ComboDetalleModule,
    ProductoModule,
    EmpresasModule,
    ProveedoresModule,
    ComandaComboModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
