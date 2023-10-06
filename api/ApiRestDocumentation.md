# ROUTES:
- [Matriculados](#matriculados)
    - [Post](#post)
    - [Get](#get)
    - [Put](#put)
    - [Delete](#delete)

# Matriculados:
"/matriculados"
## Post:
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
        departamento_d_laboral: string // OBLIGATORIO
        f_alta: Date // ('mm/dd/aaaa') Opcional
        telefono: [{
            numero: string, // ('numero') OBLIGATORIO
            whatsapp: boolean, // OBLIGATORIO
            principal: boolean, // OBLIGATORIO
            descripcion: string // Opcional
        }]// *tabla intermedia* Opcional
        otrodato: [{
            titulo: string, // OBLIGATORIO
            descripcion: string // OBLIGATORIO
        }]// *tabla intermedia* Opcional 
    }
```
res(201) = 
```ts
    // nuevo mat.toJSON()
    create: InferAttributes<Matriculado, { omit: never }> // idem get/:mp
```
## Get:
### "/"
req.body = 
```ts
    active: boolean | undefined // Si es undefined, traerá la lista completa incluyendo activos y suspendidos (no con mp cancelada o baja definitiva).
```
res(200) = 
```ts
    list: Matriculado[]
```
ejemplo:
```json
[
    {
        "f_nacimiento": "1972-07-05T03:00:00.000Z",
        "f_alta": "2002-11-25T03:00:00.000Z",
        "mp": 1,
        "nombre": "Pedro",
        "apellido": "Samanasa",
        "correo_electronico": "pepito@gmail.com.ar",
        "domicilio_particular": "Los Paraisos 3344 - Salta",
        "domicilio_laboral": "Av. Reyes Católicos 225 - Salta",
        "departamento_d_laboral": "Capital"
    },
    {
        "f_nacimiento": "1986-02-07T03:00:00.000Z",
        "f_alta": "2015-01-05T03:00:00.000Z",
        "mp": 2,
        "nombre": "Pedro",
        "apellido": "Coso",
        "correo_electronico": "hhstts@hgfdsa.ar",
        "domicilio_particular": "la holahola 55822 - hacas",
        "domicilio_laboral": "la holahola 55822 - hacas",
        "departamento_d_laboral": "Oran"
    },
    {
        "f_nacimiento": "1980-02-26T03:00:00.000Z",
        "f_alta": "2005-01-05T03:00:00.000Z",
        "mp": 3,
        "nombre": "Alfonso",
        "apellido": "Primero",
        "correo_electronico": "alfi@ddeerr.ar",
        "domicilio_particular": "Una calle N° 15- Oran",
        "domicilio_laboral": "Otra calle N° 2258- Embarcacion",
        "departamento_d_laboral": "San Martin"
    },
    {
        "f_nacimiento": "1986-01-04T03:00:00.000Z",
        "f_alta": "2012-04-05T03:00:00.000Z",
        "mp": 4,
        "nombre": "Gustavo",
        "apellido": "Peretti",
        "correo_electronico": "gperettig@gmail.com",
        "domicilio_particular": "Los Teros 37 - Bario La Fidelina - San Lorenzo",
        "domicilio_laboral": "Los Teros 37 - Bario La Fidelina - San Lorenzo",
        "departamento_d_laboral": "Capital"
    },
    {
        "f_nacimiento": "1986-06-22T03:00:00.000Z",
        "f_alta": "2015-03-09T03:00:00.000Z",
        "mp": 5,
        "nombre": "Gerardo",
        "apellido": "Ochoa",
        "correo_electronico": "gera@gata.com",
        "domicilio_particular": "No se acuerda 55",
        "domicilio_laboral": "A la vuelta 78 - Salta",
        "departamento_d_laboral": "Capital"
    }
]
```

### "/:mp"
req.param = `mp: number`
req.body = null

res(200) = 
```ts
    // mat.toJSON()
    create: InferAttributes<Matriculado, { omit: never }>
```
ejemplo:
```json
{
    "f_nacimiento": "1972-07-05T03:00:00.000Z",
    "f_alta": "2002-11-25T03:00:00.000Z",
    "mp": 1,
    "nombre": "Pedro",
    "apellido": "Samanasa",
    "correo_electronico": "pepito@gmail.com.ar",
    "domicilio_particular": "Los Paraisos 3344 - Salta",
    "domicilio_laboral": "Av. Reyes Católicos 225 - Salta",
    "departamento_d_laboral": "Capital",
    "active": true,
    "createdAt": "2023-10-06T11:46:35.763Z",
    "deletedAt": null,
    "tel": [
        {
            "numero": "38745588774",
            "whatsapp": true,
            "principal": true,
            "descripcion": "tel personal y laboral"
        },
        {
            "numero": "38745554494",
            "whatsapp": true,
            "principal": false,
            "descripcion": "Esposa (Ester Piscore)"
        }
    ],
    "dato": [
        {
            "id": 2,
            "titulo": "Regencia",
            "descripcion": "Veterinaria Los Reyes, de Don Comué"
        }
    ]
}
```
## Put:
### "/:mp"
En esta ruta solo se modifican los datos únicos (no `tel` ni `dato`).
Para la Suspensión/Rehabilitación de la matricula usar "active" t/f.

req.param = `mp: number`
req.body `<datat {[key: string]: any}>` =
 ```ts
    data: { // Solo incluir el/los dato/s a modificar
        active: boolean, // Suspensión de matricula=false, mat activa=true
        nombre: string,
        apellido: string,
        correo_electronico: string,
        f_nacimiento: Date,
        domicilio_particular: string,
        domicilio_laboral: string,
        f_alta: Date
    }
```
res(200) = 
```ts
    // modificado mat.toJSON()
    create: InferAttributes<Matriculado, { omit: never }> // idem get/:mp
```
### "/reinstatement/:mp"
Esta ruta es para reinscripción de una matricula cancelada (deleted).

req.param = `mp: number`
req.body = null

res(201) = 
```ts
    // mat.toJSON()
    create: InferAttributes<Matriculado, { omit: never }>
``` 
### "/modify/:mp"
Ruta de modificacion de tablas de datos anexos (telefono y otros datos)

req.param = `mp: number` (obligatorio en todas estas rutas)

### -Telefono
Modificar, agregar o eliminar un telefono de un matriculado. Cambian los datos del body y del query.

#### Para agregar un nuevo numero:
req.body =
  ```ts
  tel: {
            numero: string, // OBLIGATORIO
            whatsapp: boolean, // OBLIGATORIO
            principal: boolean, // OBLIGATORIO
            descripcion: string // Opcional
        }
  ```
#### Para modificar un numero existente:
req.query = 
```ts
  tel: 'numero a modificar' // (numero viejo) ej: 03874628777
```
req.body =
  ```ts
  tel: { // (datos de reemplazo) Solo incluir el/los dato/s nuevos para reemplazar el otro
            numero: string,
            whatsapp: boolean,
            principal: boolean,
            descripcion: string 
        }
  ```
#### Para eliminar un numero:
req.query = 
```ts
  tel: 'numero a eliminar' // ej: 03874628777
```
req.body =
  ```ts
  tel: 'delete' // solo ese string por body
  ```
### -Otros Datos
Modificar, agregar o eliminar un dato anexo de un matriculado. Cambian los datos del body y del query.

#### Para agregar un nuevo dato:
req.body =
  ```ts
  dato: {
            titulo: string, // OBLIGATORIO
            descripcion: string // OBLIGATORIO
        }
  ```
#### Para modificar un dato existente:
req.query = 
```ts
  dato: number // 'id del dato a modificar'
```
req.body =
  ```ts
  dato: { // (datos de reemplazo) Solo incluir el/los concepto/s modificado/s para reemplazar
            titulo: string,
            descripcion: string 
        }
  ```
#### Para eliminar un dato:
req.query = 
```ts
  dato: number // 'id del dato a modificar'
```
req.body =
  ```ts
  dato: 'delete' // solo ese string por body
  ```

Dato de color, si se completan los requisitos de tel y dato, se puede llegar a modificar, eliminar o agregar tanto un telefono como un dato anexo en el mismo acto. No recomendable.