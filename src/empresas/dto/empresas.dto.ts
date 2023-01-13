export class EmpresaCreateDto {
  nombreEmpresa: string;
  nombreComercial: string;
  descripcion: string;
  ID_Estado: number;
  ID_Municipio: number;
  ID_Localidad: number;
  direccion: string;
  cp: number;
  email: string;
  telefono: string;
  rfc: string;
  facebook: string;
  instagram: string;
  twitter: string;
  iva: number;
  imagen?: string;
  estatus: string;
}

export class EmpresaUpdateDto {
  id_empresa: number;
  nombreEmpresa: string;
  nombreComercial: string;
  descripcion: string;
  ID_Estado: number;
  ID_Municipio: number;
  ID_Localidad: number;
  direccion: string;
  cp: number;
  email: string;
  telefono: string;
  rfc: string;
  facebook: string;
  instagram: string;
  twitter: string;
  iva: number;
  imagen?: string;
  estatus: string;
}
