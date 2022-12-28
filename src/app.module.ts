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
import { ComboDetalleModule } from './combo_detalle/combo_detalle.module';
import { ProductoModule } from './producto/producto.module';
import { EmpresasModule } from './empresas/empresas.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ComandaComboModule } from './comanda_combo/comanda_combo.module';
import { GrupoProductoModule } from './grupo_producto/grupo_producto.module';
import { GuarnicionModule } from './guarnicion/guarnicion.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { MermasModule } from './mermas/mermas.module';
import { MesaModule } from './mesa/mesa.module';
import { MunicipioModule } from './municipio/municipio.module';
import { RecetasModule } from './recetas/recetas.module';
import { ReportesModule } from './reportes/reportes.module';
import { TipoUsuarioModule } from './tipo_usuario/tipo_usuario.module';
import { TipoMermasModule } from './tipo_mermas/tipo_mermas.module';
import { UsuariosModule } from './usuarios/usuarios.module';

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
    ComboDetalleModule,
    ProductoModule,
    EmpresasModule,
    ProveedoresModule,
    ComandaComboModule,
    GrupoProductoModule,
    GuarnicionModule,
    LocalidadesModule,
    MermasModule,
    MesaModule,
    MunicipioModule,
    RecetasModule,
    ReportesModule,
    TipoUsuarioModule,
    TipoMermasModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
