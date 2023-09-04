//from JSON Navegacion
export interface Navigation {
  indexTitle: string;
  subindex?: {
    subindexTitle: string;
    url: string;
  }[];
  url?: string;
}
//To present Authorities
export interface Role {
  nombre: string;
  telefono: string;
  correoElectronico: string;
}
export type Cons = { [key: string]: Role[]; }
export type Org = { [key: string]: Role; }
export type ODesc = {
    organism: string;
    staff: Org;
    roles: string[];
}
export type RData = {
    title: string | null;
    name: string;
    tel: string;
    email: string;
}
export type Present = { motive: string | undefined; }
//NavBar
export type Menutype = {
  name: string,
  items:  {
      subindexTitle: string;
      url: string;
  }[]
}

