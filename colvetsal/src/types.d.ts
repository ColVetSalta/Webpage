//from JSON Navegacion
export interface Navigation {
  indexTitle: string;
  subindex?: {
    subindexTitle: string;
    url: string;
  }[];
  url?: string;
}
// Hook & Validate

export type Res =
  | Matriculado
  | ResolPost
  | Organismo
  | News
  | Record<string, never>;
export type ErrorRes =
  | MatriculadoError
  | ResolPost
  | Organismo
  | News
  | Record<string, never>;

//To present Authorities
export interface DatosMinimos {
  mp: number;
  nombre: string;
  apellido: string;
}
export interface Role extends DatosMinimos {
  cargo: string;
  periodo: number;
  fecha_inicio: string | null;
  fecha_final: string | null;
  numero: string | null;
  correo_electronico: string | null;
}

export interface TelBasics {
  numero: string;
  descripcion: string;
}

export interface Telefono extends TelBasics {
  whatsapp: boolean; // OBLIGATORIO
  principal: boolean; // OBLIGATORIO
}

export interface TelefonoError extends TelBasics {
  whatsapp: string | boolean;
  principal: string | boolean;
}

export interface AdditionalData {
  titulo: string; // OBLIGATORIO
  descripcion: string; // OBLIGATORIO
}
export interface Matriculado extends DatosMinimos {
  correo_electronico: string; // Opcional
  f_nacimiento: Date; // ('mm/dd/aaaa'), OBLIGATORIO
  domicilio_particular: string; // OBLIGATORIO
  domicilio_laboral: string; // OBLIGATORIO
  departamento_d_laboral: string; // OBLIGATORIO
  f_alta: Date; // ('mm/dd/aaaa') Opcional
  active: boolean;
  telefono: Telefono[]; // *tabla intermedia* Opcional
  otrodato?: AdditionalData[];
}

export interface MatriculadoError
  extends Omit<
    Matriculado,
    "mp" | "active" | "telefono" | "f_nacimiento" | "f_alta"
  > {
  mp: number | string;
  f_nacimiento: string;
  f_alta: string;
  active: boolean | string;
  telefono: TelefonoError[] | string;
}

export type Organismo = {
  [key: string]: Role[];
};

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
  id: number;
  fecha: string;
  num: number;
  year: number;
  titulo: string;
  visto: string;
  considerando: string;
  resuelve: string;
  orgid: string;
  firmas: {
    mp: number;
    nombre: string;
    apellido: string;
    cargo: string;
  }[];
}
export interface ResolPost extends Omit<Resol, "id" | "firmas"> {
  firmas: number[];
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
export type Categories =
  | "NOTICIAS"
  | "ARTICULOS"
  | "CURSOS"
  | "EVENTOS"
  | "ANUNCIOS"
  | "TRABAJO"
  | "BOLETIN";

export type News = {
  id: number;
  categoria: Categories;
  image: string | null;
  alt: string | undefined;
  title: string;
  summary: string | null;
  fulltext: string | null;
  date: string | null;
  url: string | null;
  destacado: boolean;
  resaltar: boolean;
};

export interface NewsError
  extends Omit<
    News,
    "id" | "categoria" | "destacado" | "resaltar"
  > {
  id: number | string;
  categoria: Categories | string;
  destacado: boolean | string;
  resaltar: boolean | string;
}

export interface IPostTelModalForm {
  registered: Matriculado;
  setRegistered: React.Dispatch<React.SetStateAction<Matriculado>>;  
  Validate: (input: Matriculado) => void;
}

