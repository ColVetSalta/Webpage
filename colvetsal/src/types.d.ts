export interface Navigation {
  indexTitle: string;
  subindex?: {
    subindexTitle: string;
    url: string;
  }[];
  url?: string;
}
export interface Role {
  nombre: string;
  telefono: string;
  correoElectronico: string;
}
