import { Button, Checkbox, CheckboxGroup, FormControl, FormHelperText, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList, Textarea } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function PostNewsForm(): JSX.Element {

    return <FormControl
        overflowY={'scroll'}
        overflowX={'auto'}
        maxHeight={'50dvh'}
        id="Form"
    >
        <FormLabel>Fecha</FormLabel>
        <Input
            className="input"
            id="input5"
            placeholder="Select Date and Time"
            type='date'
        />
        <FormLabel>Títular</FormLabel>
        <Input
            className="input"
            id="input1"
            placeholder="Titular"
            type='number'
        />
        <FormLabel>Categoría:</FormLabel>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Seleccione una Categoría:
            </MenuButton>{
                <MenuList>
                    <MenuItem>NOTICIAS</MenuItem>
                    <MenuItem>ARTICULOS</MenuItem>
                    <MenuItem>CURSOS</MenuItem>
                    <MenuItem>EVENTOS</MenuItem>
                    <MenuItem>ANUNCIOS</MenuItem>
                    <MenuItem>TRABAJO</MenuItem>
                    <MenuItem>BOLETIN</MenuItem>
                </MenuList>}
        </Menu>
        <FormLabel>Resumen</FormLabel>
        <Textarea
            className="input"
            id="input4"
            placeholder="Resumen corto"
        />
        <FormLabel>Texto Completo</FormLabel>
        <Textarea
            className="input"
            id="input6"
            placeholder="Aca va el cuerpo completo de la nota"
        />
        <FormLabel>Imagen</FormLabel>
        <Input
            className="input"
            id="input2"
            placeholder="URL de la Imagen"
            type='text'
        />
        <FormHelperText>Si tiene mas de un correo, agregar en "Informacion Adicional".</FormHelperText>

        <FormLabel>Presentación</FormLabel>
        <CheckboxGroup>
            <Checkbox>Destacado</Checkbox>
            <FormHelperText>Se mostrará en página de inicio</FormHelperText>
            <Checkbox>Resaltar</Checkbox>
            <FormHelperText>Se muestra como ventana extra</FormHelperText>
        </CheckboxGroup>
    </FormControl>
}