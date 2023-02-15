import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CombosModule } from "./combos/combos.module";
import { ServiciosModule } from "./servicios/servicios.module";
import { UnidadesModule } from "./unidades/unidades.module";
import { TipoPagosModule } from "./tipo_pagos/tipo_pagos.module";
import { CategoriaMermaModule } from "./categoria_merma/categoria_merma.module";
import { InsumosModule } from "./insumos/insumos.module";
import { EquivalenciasMedidasModule } from "./equivalencias_medidas/equivalencias_medidas.module";
import { ClienteModule } from "./cliente/cliente.module";
import { AreaRestauranteModule } from "./area_restaurante/area_restaurante.module";
import { TipoMesaModule } from "./tipo_mesa/tipo_mesa.module";
import { ImagesModule } from "./images/images.module";
import { ComboDetalleModule } from "./combo_detalle/combo_detalle.module";
import { ProductoModule } from "./producto/producto.module";
import { EmpresasModule } from "./empresas/empresas.module";
import { ProveedoresModule } from "./proveedores/proveedores.module";
import { ComandaComboModule } from "./comanda_combo/comanda_combo.module";
import { GrupoProductoModule } from "./grupo_producto/grupo_producto.module";
import { GuarnicionModule } from "./guarnicion/guarnicion.module";
import { LocalidadesModule } from "./localidades/localidades.module";
import { MermasModule } from "./mermas/mermas.module";
import { MesaModule } from "./mesa/mesa.module";
import { MunicipioModule } from "./municipio/municipio.module";
import { RecetasModule } from "./recetas/recetas.module";
import { ReportesModule } from "./reportes/reportes.module";
import { TipoUsuarioModule } from "./tipo_usuario/tipo_usuario.module";
import { TipoMermasModule } from "./tipo_mermas/tipo_mermas.module";
import { UsuariosModule } from "./usuarios/usuarios.module";
import { AgrupacionModule } from "./agrupacion/agrupacion.module";
import { SucursalesModule } from "./sucursales/sucursales.module";
import { RolDeFuncionalidadesModule } from "./rol_de_funcionalidades/rol_de_funcionalidades.module";
import { ReservacionesModule } from "./reservaciones/reservaciones.module";
import { FuncionalidadesModule } from "./funcionalidades/funcionalidades.module";
import { DiasHabilesModule } from "./dias_habiles/dias_habiles.module";
import { DetalleRecetaModule } from "./detalle_receta/detalle_receta.module";
import { ComedorModule } from "./comedor/comedor.module";
import { ComandaServiciosModule } from "./comanda_servicios/comanda_servicios.module";
import { ComandaProductosModule } from "./comanda_productos/comanda_productos.module";
import { ComandaModule } from "./comanda/comanda.module";
import { CategoriaProductosModule } from "./categoria_productos/categoria_productos.module";
import { EstadosModule } from "./estados/estados.module";
import { UbicacionModule } from "./ubicacion/ubicacion.module";
import { SetupModule } from "./setup/setup.module";
import { SetupService } from "./setup/setup.service";
import { AdminEmpresaModule } from "./admin_empresa/admin_empresa.module";
import { RepresentanteLegalModule } from "./representante_legal/representante_legal.module";
import { ColoniasServicioModule } from "./colonias_servicio/colonias_servicio.module";
import { AuthenticationModule } from "./authentication/authentication.module";

@Module({
  imports: [
    SetupModule,
    TypeOrmModule.forRootAsync({
      useClass: SetupService,
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
    AgrupacionModule,
    SucursalesModule,
    RolDeFuncionalidadesModule,
    ReservacionesModule,
    ProveedoresModule,
    ProductoModule,
    MesaModule,
    FuncionalidadesModule,
    EquivalenciasMedidasModule,
    DiasHabilesModule,
    DetalleRecetaModule,
    ComedorModule,
    ComandaServiciosModule,
    ComandaProductosModule,
    ComandaModule,
    ComandaComboModule,
    CategoriaProductosModule,
    CategoriaMermaModule,
    EstadosModule,
    UbicacionModule,
    AdminEmpresaModule,
    RepresentanteLegalModule,
    ColoniasServicioModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
