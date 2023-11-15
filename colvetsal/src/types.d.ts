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
  cargo: string;
  mp: number | null;
  nombre: string | null;
  apellido: string | null;
  fecha_inicio: string | null;
  fecha_final: string | null;
  numero: string | null;
  correo_electronico: string | null;
}

export type Organismo = {
  [key: string]: Role[];
}

export type ConsMy = {
  [key: string]: Organismo;
};

// to use in function
export type ODesc = {
  organism: string;
  staff: Organismo;
  roles: string[];
};
export type RData = {
  title: string | null;
  name: string;
  tel: string;
  email: string;
};
//Resoluciones
export interface Resol {
  id: number
  fecha: string
num: number
year: number
titulo: string
visto:string
considerando: string
resuelve: string
orgid: string
firmas: {
  mp: number
  nombre: string
  apellido: string
  cargo: string
}[]
}
export interface ResolAnual {
  [key: string | number]: Resol;
}
export type ResolOrg = {
  info: {
    title: string;
    type: string;
  };
  [ket: string]: ResolAnual;
};

export type Inst = {
  [key: string]: ConsMy | ResolOrg;
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
  id: number;
  categoria: 'NOTICIAS' | 'ARTICULOS' | 'CURSOS' | 'EVENTOS' | 'ANUNCIOS' | 'TRABAJO' | 'BOLETIN';
  image: string | null;
  alt: string | undefined;
  title: string;
  summary: string | null;
  fulltext: string | null;
  date: string | null;
  url: string | null;
  destacado: boolean
  resaltar: boolean

};
