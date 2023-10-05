# ROUTES:
- [Matriculados](#matriculados)
## Matriculados:
"/matriculados"
### Post:
### "/"
req.body `<datat {[key: string]: any}>` =
 ```ts
    data: {
        mp: number, // PK OBLIGATORIO
        nombre: string, // OBLIGATORIO
        apellido: string, // OBLIGATORIO
        correo_electronico: string, // Opcional
        f_nacimiento: Date // ('mm/dd/aaaa'), OBLIGATORIO
        domicilio_particular: string, // OBLIGATORIO
        domicilio_laboral: string, // OBLIGATORIO
        f_alta: Date // ('mm/dd/aaaa') Opcional
        telefono: [
            numero: number, // OBLIGATORIO
            whatsapp: boolean, // OBLIGATORIO
            principal: boolean, // OBLIGATORIO
            descripcion: string // Opcional
        ]// *tabla intermedia* Opcional
        otrodato: [
            titulo: string, // OBLIGATORIO
            descripcion: string // OBLIGATORIO
        ]// *tabla intermedia* Opcional 
    }
```
res(201) = 
```ts
    // mat?.toJSON()
    create: Matriculado | null
```
### Get:
### "/"
req.body = 
```ts
    active: boolean
```

   