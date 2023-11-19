import { Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { nextFocus } from "../../../utils/FormUtils";

export default function PostingMatForm(): JSX.Element {

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
        />
        <FormLabel>Nombre:</FormLabel>
        <Input
            className="input"
            id="input2"
            placeholder="Escriba Nombre completo"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
        />
        <FormLabel>Apellido:</FormLabel>
        <Input
            className="input"
            id="input3"
            placeholder="Escriba Apellido"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
        />
        <FormLabel>Correo electrónico principal:</FormLabel>
        <Input
            className="input"
            id="input4"
            placeholder="email@mail.com"
            onKeyDown={(e) => nextFocus(e)}
            type='email'
        />
        <FormHelperText>Si tiene mas de un correo, agregar en "Informacion Adicional".</FormHelperText>
        <FormLabel>Fecha de nacimiento:</FormLabel>
        <Input
            className="input"
            id="input5"
            placeholder="Select Date and Time"
            onKeyDown={(e) => nextFocus(e)}
            type='date'
        />
        <FormLabel>Domicilio Particular:</FormLabel>
        <Input
            className="input"
            id="input6"
            placeholder="Select Date and Time"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
        />
        <FormHelperText>Domicilio de residencia</FormHelperText>
        <FormLabel>Domicilio Laboral:</FormLabel>
        <Input
            className="input"
            id="input7"
            placeholder="Select Date and Time"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
        />
        <FormLabel>Departamento de Residencia:</FormLabel>
        <Input
            className="input"
            id="input8"
            placeholder="Select Date and Time"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
        />
        <FormHelperText>Según articulo 7 de ley N° 6456 - Será considerado para zonas electorales</FormHelperText>
        <FormLabel>Fecha de Alta</FormLabel>
        <Input
            className="input"
            id="input9"
            placeholder="Select Date and Time"
            onKeyDown={(e) => nextFocus(e)}
            type='date'
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