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
export interface datat {[key: string]: any}

export interface MatriculadoJSON {
  mp: number // PK OBLIGATORIO
  nombre: string // OBLIGATORIO
  apellido: string // OBLIGATORIO
  correo_electronico: string | null// Opcional
  f_nacimiento: Date // ('mm/dd/aaaa'), OBLIGATORIO
  domicilio_particular: string // OBLIGATORIO
  domicilio_laboral: string // OBLIGATORIO
  departamento_d_laboral: string // OBLIGATORIO
  f_alta: Date // ('mm/dd/aaaa') Opcional
  [key: string]: any
  telefono?: [{
    numero: string // ('numero') OBLIGATORIO
    whatsapp: boolean // OBLIGATORIO
    principal: boolean // OBLIGATORIO
    descripcion: string | null// Opcional
  }]// *tabla intermedia* Opcional
  otrodato?: [{
    titulo: string // OBLIGATORIO
    descripcion: string // OBLIGATORIO
  }]
}
