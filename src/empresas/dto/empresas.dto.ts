export class EmpresaCreateDto {
  nombre_empresa: string;
  nombre_comercial: string;
  descripcion: string;
  codigo_pos: string;
  email: string;
  telefono: string;
  rfc: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  iva: number;
  imagen?: string;
  estatus: string;
}

export class EmpresaUpdateDto {
  nombre_empresa?: string;
  nombre_comercial?: string;
  descripcion?: string;
  codigo_pos?: string;
  email?: string;
  telefono?: string;
  rfc?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  iva?: number;
  imagen?: string;
  estatus: string;
}
