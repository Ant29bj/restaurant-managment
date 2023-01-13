export class ProductosCreateDto {
  id_empresa: number;
  id_sucursal: number;
  id_proveedor: number;
  id_categoria: number;
  descripcion: string;
  precio_prod: number;
  stock: number;
  stock_minimo: number;
  vender_sinstock: string;
  inventariable: string;
  imagen?: string;
  estatus: string;
}
