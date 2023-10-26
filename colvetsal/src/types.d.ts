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
/*"cargo": "Presidente",
            "mp": 2,
            "nombre": "Pedro",
            "apellido": "Coso",
            "fecha_inicio": "2021-12-10T03:00:00.000Z",
            "fecha_final": "2024-12-10T03:00:00.000Z" */
export interface Role {
  nombre: string;
  telefono: string;
  correoElectronico: string;
}

export interface Consejeros {
  info: {
    title: string;
    type: string;
  };
  [key: string]: Role[];
}
export interface Organismo {
  info: {
    title: string;
    type: string;
  };
  [key: string]: Role;
}

export type ConsMy = {
  info: {
    title: string;
    type: string;
  };
  [key: string]: Organismo | Consejero
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
    [key: string | number]: {
      fecha: string;
      visto: string;
      resuelve: { [key: string]: string };
      firma: { [key: string]: string };
      anexo: unknown;
    };
}
export interface ResolAnual {
  [key: string | number]: Resol
  }
export type ResolOrg = {
  info: {
    title: string;
    type: string;
  };
  [ket: string]: ResolAnual
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
  image: string | null;
  alt: string | null;
  title: string;
  summary: string;
  fullText: string;
  date: string;
};
