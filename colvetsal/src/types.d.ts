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
export type Cons = {
  info?: {
    title: string;
  };
  [key: string]: Role[];
};
export type Org = {
  info?: {
    title: string;
  };
  [key: string]: Role;
};
export type ConsMy = {
  [key: string]: Org | Cons;
};
export type ODesc = {
  organism: string;
  staff: Org;
  roles: string[];
};
export type RData = {
  title: string | null;
  name: string;
  tel: string;
  email: string;
};
// export type Present = { motive: string | undefined; }
//Resoluciones
export type Resol = {
  [key: number]: {
    [key: number]: {
      fecha: string;
      visto: string;
      resuelve: { [key: string]: string };
      firma: { [key: string]: string };
      anexo: unknown;
    };
  };
};
export type Inst = {
  [key: string]: ConsMy | Resol;
};

//NavBar
export type Menutype = {
  name: string;
  items: {
    subindexTitle: string;
    url: string;
  }[];
};
//Novedades
export type News = {
  image: string | null;
  alt: string | null;
  title: string;
  summary: string;
  fullText: string;
  date: string;
};
