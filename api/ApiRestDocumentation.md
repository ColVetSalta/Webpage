# ROUTES:
## Matriculados:
"/matriculados
### Post:
    "/"
    -->body < datat {[key: string]: any} > = data: {
    mp: number, PK OBLIGATORIO
    nombre: string, OBLIGATORIO
    apellido: string, OBLIGATORIO
    correo_electronico: string,
    f_nacimiento: string (mm/dd/aaaa), OBLIGATORIO
    domicilio_particular: string, OBLIGATORIO
    domicilio_laboral: string, OBLIGATORIO
    f_alta: string (mm/dd/aaaa) OBLIGATORIO
    telefono: [list]***********************hacer tabla intermedia************************
    otrodato: [list]*************************************hacer tabla intermedia de otros datos******************************
    }