import { Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { nextFocus } from "../../../utils/FormUtils";
import { ChangeEvent, useState } from "react";
import { Matriculado } from "../../../types";

export default function PostMatriculaForm(): JSX.Element {
    const [registered, setRegistered] = useState<Matriculado>({
        mp: 0,
        nombre: '',
        apellido: '',
        correo_electronico: '',
        f_nacimiento: new Date(),
        domicilio_particular: '',
        domicilio_laboral: '',
        departamento_d_laboral: '',
        f_alta: new Date(),
        active: false,
        telefono: [{
            numero: '',
            whatsapp: false,
            principal: false,
            descripcion: '',
        }],
        otrodato: [{
            titulo: '',
            descripcion: '',
        }]
    })

    function HandleChange(e: ChangeEvent<HTMLInputElement>) {
        setRegistered({
            ...registered,
            [e.target.name]: e.target.value
        })
    }
console.log(registered);

    return <FormControl
        overflowY={'scroll'}
        overflowX={'auto'}
        maxHeight={'50dvh'}
        id="Form"
    >

        <FormLabel>M.P:</FormLabel>
        <Input
            className="input"
            id="input1"
            placeholder="Ingrese el nuevo Número de Matrícula"
            type='number'
            onKeyDown={(e) => nextFocus(e)}
            name='mp'
            value={registered.mp}
            onChange={HandleChange}
        />
        <FormLabel>Nombre:</FormLabel>
        <Input
            className="input"
            id="input2"
            placeholder="Escriba Nombre completo"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
            name='nombre'
            value={registered.nombre}
            onChange={HandleChange}
        />
        <FormLabel>Apellido:</FormLabel>
        <Input
            className="input"
            id="input3"
            placeholder="Escriba Apellido"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
            name='apellido'
            value={registered.apellido}
            onChange={HandleChange}
        />
        <FormLabel>Correo electrónico principal:</FormLabel>
        <Input
            className="input"
            id="input4"
            placeholder="email@mail.com"
            onKeyDown={(e) => nextFocus(e)}
            type='email'
            name='correo_electronico'
            value={registered.correo_electronico}
            onChange={HandleChange}
        />
        <FormHelperText>Si tiene mas de un correo, agregar en "Informacion Adicional".</FormHelperText>
        <FormLabel>Fecha de nacimiento:</FormLabel>
        <Input
            className="input"
            id="input5"
            placeholder="Select Date and Time"
            onKeyDown={(e) => nextFocus(e)}
            type='date'
            name='f_nacimiento'
            onChange={HandleChange}
        />
        <FormLabel>Domicilio Particular:</FormLabel>
        <Input
            className="input"
            id="input6"
            placeholder="Select Date and Time"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
            name='domicilio_particular'
            value={registered.domicilio_particular}
            onChange={HandleChange}
        />
        <FormHelperText>Domicilio de residencia</FormHelperText>
        <FormLabel>Domicilio Laboral:</FormLabel>
        <Input
            className="input"
            id="input7"
            placeholder="Select Date and Time"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
            name='domicilio_laboral'
            value={registered.domicilio_laboral}
            onChange={HandleChange}
        />
        <FormLabel>Departamento de Residencia:</FormLabel>
        <Input
            className="input"
            id="input8"
            placeholder="Select Date and Time"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
            name='departamento_d_laboral'
            value={registered.departamento_d_laboral}
            onChange={HandleChange}
        />
        <FormHelperText>Según articulo 7 de ley N° 6456 - Será considerado para zonas electorales</FormHelperText>
        <FormLabel>Fecha de Alta</FormLabel>
        <Input
            className="input"
            id="input9"
            placeholder="Select Date and Time"
            onKeyDown={(e) => nextFocus(e)}
            type='date'
            name='f_alta'
            onChange={HandleChange}
        />
        <FormLabel>Agregar al menos un telefono</FormLabel>
        <Button
        >Añadir nuevo Telefono</Button>
        <FormLabel>Información Adicional:</FormLabel>
        <Button
        >Añadir Información</Button>
        <FormHelperText>otrodato</FormHelperText>
    </FormControl>
}