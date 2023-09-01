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
export type Org = { [key: string]: Role; }
export type ODesc = {
    organism: string;
    staff: Org;
    roles: string[];
}
