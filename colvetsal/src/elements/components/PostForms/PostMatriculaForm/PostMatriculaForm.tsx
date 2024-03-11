import { Button, FormControl, FormHelperText, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { HandleInputNumFirstFocus, nextFocus } from "../../../../utils/FormUtils";
import { ChangeEvent, MouseEvent } from "react";
import PostAdditionalDataForm from "./PostAdditionalDataForm";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Matriculado, MatriculadoError } from "../../../../types";
import NewTelFunctComp from "./NewTelFunctComp";
import TelMapperComp from "./TelMapperComp ";

export interface IPostMatriculaForm {
    registered: Matriculado
    setRegistered: React.Dispatch<React.SetStateAction<Matriculado>>
    error: MatriculadoError
    Validate: (input: Matriculado) => void
}
export default function PostMatriculaForm({ registered, setRegistered, error, Validate }: IPostMatriculaForm): JSX.Element {
    const departamentos = [
        'Capital',
        'Oran',
        'Anta',
        'Cerrillos',
        'Metán',
        'Rosario de Lerma',
        'Rosario de la Frontera',
        'La Candelaria',
        'Rivadavia',
        'Cafayate',
        'San Martin',
        'Güemes',
        'Chicoana',
        'Santa Victoria',
        'La Viña',
        'La Caldera',
        'Cachi',
        'San Carlos',
        'Los Andes',
        'Iruya',
        'Molinos',
        'Guachipas',
        'La Poma']


    function HandleChange(e: ChangeEvent<HTMLInputElement>) {
        Validate({
            ...registered,
            [e.target.name as keyof typeof registered]: e.target.value,
        })
        setRegistered({
            ...registered,
            [e.target.name as keyof typeof registered]: e.target.value,
            active: true
        })
    }

    function HandleDeptoSelect(e: MouseEvent<HTMLButtonElement>) {
        setRegistered({
            ...registered,
            departamento_d_laboral: e.currentTarget.name
        })
    }

    function CopyAddress() {
        setRegistered({
            ...registered,
            domicilio_laboral: registered.domicilio_particular
        })
    }
    console.log(registered);
    console.log(error);

    return <FormControl
        overflowY={'scroll'}
        overflowX={'auto'}
        maxHeight={'50dvh'}
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
            onFocus={HandleInputNumFirstFocus}
        />
        <FormHelperText>{(error.mp !== 0 && error.mp !== 'pass') ? error.mp : null}</FormHelperText>

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
        <FormHelperText>{error.nombre === 'pass' ? null : error.nombre}</FormHelperText>

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
        <FormHelperText>{error.apellido === 'pass' ? null : error.apellido}</FormHelperText>

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
        <FormHelperText>{error.correo_electronico === 'pass' ? null : error.correo_electronico}</FormHelperText>
        <FormHelperText>Si tiene mas de un correo, agregar en "Informacion Adicional".</FormHelperText>

        <FormLabel>Fecha de nacimiento:</FormLabel>
        <Input
            className="input"
            id="input5"
            placeholder="Seleccione la Fecha o escriba en formato dd/mm/aaaa"
            onKeyDown={(e) => nextFocus(e)}
            type='date'
            name='f_nacimiento'
            onChange={HandleChange}
        />
        <FormHelperText>{error.f_nacimiento === 'pass' ? null : error.f_nacimiento}</FormHelperText>

        <FormLabel>Domicilio Particular:</FormLabel>
        <Input
            className="input"
            id="input6"
            placeholder="'Calle - número - localidad' o 'Barrio - Lote - Localidad'"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
            name='domicilio_particular'
            value={registered.domicilio_particular}
            onChange={HandleChange}
        />
        <FormHelperText>Domicilio de residencia</FormHelperText>
        <FormHelperText>{error.domicilio_particular === 'pass' ? null : error.domicilio_particular}</FormHelperText>

        <FormLabel>Domicilio Laboral:</FormLabel>
        <Button onClick={() => { CopyAddress() }}>Mismo Domicilio</Button>
        <Input
            className="input"
            id="input7"
            placeholder="'Calle - número - localidad' o 'Barrio - Lote - Localidad'"
            onKeyDown={(e) => nextFocus(e)}
            type='text'
            name='domicilio_laboral'
            value={registered.domicilio_laboral}
            onChange={HandleChange}
        />
        <FormHelperText>{error.domicilio_laboral === 'pass' ? null : error.domicilio_laboral}</FormHelperText>

        <FormLabel>Departamento de Residencia:</FormLabel>
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className="input"
                id="input8"
            >
                Seleccione un Departemento
            </MenuButton>
            <MenuList>{departamentos ? departamentos.map((d) => {
                return <MenuItem
                    key={d}
                    name={d}
                    value={registered.departamento_d_laboral}
                    onClick={(e) => HandleDeptoSelect(e)}>
                    {d}</MenuItem>
            }) : null}
            </MenuList>
        </Menu>
        {registered.departamento_d_laboral === 'pass' ? null : <FormHelperText>{registered.departamento_d_laboral}</FormHelperText>}
        <FormHelperText>Según articulo 7 de ley N° 6456 - Será considerado para zonas electorales</FormHelperText>
        <FormLabel>Fecha de Alta</FormLabel>
        <Input
            className="input"
            id="input9"
            placeholder="Indique la fecha de alta"
            type='date'
            name='f_alta'
            onChange={HandleChange}
        />

        <FormLabel>Agregar al menos un telefono</FormLabel>

        <NewTelFunctComp
            // children={PostTelModalForm}
            registered={registered}
            setRegistered={setRegistered}
            Validate={Validate as (input: Matriculado) => void}
        />

        <TableContainer>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th>Número</Th>
                        <Th>Descripción</Th>
                        <Th>whatsapp</Th>
                    </Tr>
                </Thead>

                <TelMapperComp 
                    registered={registered}
                    setRegistered={setRegistered}
                    Validate={Validate as (input: Matriculado) => void} />

            </Table>
        </TableContainer>
        
        <FormLabel>Información Adicional:</FormLabel>
        <PostAdditionalDataForm registered={registered} setRegistered={setRegistered} Validate={Validate} />
        <TableContainer>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th>Título</Th>
                        <Th>Descripción</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {(registered.otrodato === undefined || registered.otrodato[0].titulo === '') ?
                        <Tr>
                            <Td>Asunto</Td>
                            <Td>Descrpción (opcional)</Td>
                        </Tr> :
                        registered.otrodato.map((od) => {
                            return <Tr>
                                <Td>{od.titulo}</Td>
                                <Td>{od.descripcion}</Td>
                            </Tr>
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>

    </FormControl>
}