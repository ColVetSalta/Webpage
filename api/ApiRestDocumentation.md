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
    active: boolean
```
res(200) = 
```ts
    list: Matriculado[]
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
    "f_nacimiento": "1985-07-05T03:00:00.000Z",
    "f_alta": "2005-01-05T03:00:00.000Z",
    "mp": 1,
    "nombre": "Gustavo",
    "apellido": "Peretti",
    "correo_electronico": "gpjuytt@hgfdsa.ar",
    "domicilio_particular": "la gjhghgfdhg 22 - afearg",
    "domicilio_laboral": "data.domicilio_laboral",
    "active": true,
    "createdAt": "2023-10-05T12:59:16.967Z",
    "updatedAt": "2023-10-05T12:59:16.967Z",
    "deletedAt": null,
    "tel": [
        {
            "id": 1,
            "numero": "0378-651549",
            "whatsapp": false,
            "principal": true,
            "descripcion": "personal",
            "mp": 1,
            "createdAt": "2023-10-05T12:59:17.977Z",
            "updatedAt": "2023-10-05T12:59:17.977Z",
            "deletedAt": null
        },
        {
            "id": 2,
            "numero": "0387-22558899",
            "whatsapp": true,
            "principal": false,
            "descripcion": null,
            "mp": 1,
            "createdAt": "2023-10-05T12:59:17.977Z",
            "updatedAt": "2023-10-05T12:59:17.977Z",
            "deletedAt": null
        }
    ],
    "dato": [
        {
            "id": 1,
            "titulo": "especialidad",
            "descripcion": "domador de burro",
            "mp": 1,
            "createdAt": "2023-10-05T12:59:17.978Z",
            "updatedAt": "2023-10-05T12:59:17.978Z",
            "deletedAt": null
        },
        {
            "id": 2,
            "titulo": "Antecedente",
            "descripcion": "Expediente 01/23, le pega a las vacas",
            "mp": 1,
            "createdAt": "2023-10-05T12:59:17.979Z",
            "updatedAt": "2023-10-05T12:59:17.979Z",
            "deletedAt": null
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
  tel: { // (datos de reemplazo) Solo incluir el/los concepto/s modificado/s para reemplazar
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