export interface Navigation {
  indexTitle: string
  subindex?: Array<{
    subindexTitle: string
    url: string
  }>
  url?: string
} /* from JSON Navegacion */
// To present Authorities
export interface Role {
  nombre: string
  telefono: string
  correoElectronico: string
}

export interface Pack {
  info: {
    title: string
    type: string
  }
}

export interface Consejeros extends Pack {
  [key: string]: Role[]
}
export interface Organismo extends Pack {
  [key: string]: Role
}

export interface ConsMy extends Pack {
  [key: string]: Organismo | Consejero
}

// to use in function
export interface ODesc {
  organism: string
  staff: Organismo
  roles: string[]
}
export interface RData {
  title: string | null
  name: string
  tel: string
  email: string
}
// Resoluciones
export interface Resol {
  [key: string | number]: {
    fecha: string
    visto: string
    considerando: string
    resuelve: { [key: string]: string }
    firma: { [key: string]: string }
    anexo: unknown
  }
}
export interface ResolAnual {
  [key: string | number]: Resol
}
export interface ResolOrg extends Pack {
  [ket: string]: ResolAnual
}

export interface Inst {
  [key: string]: ConsMy | ResolOrg
}

// NavBar
export interface Menutype {
  name: string
  items: Array<{
    subindexTitle: string
    url: string
  }>
}
// Novedades
export interface News {
  image: string | null
  alt: string | null
  title: string
  summary: string
  fullText: string
  date: string
}
