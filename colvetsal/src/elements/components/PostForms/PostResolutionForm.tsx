import { Button, FormControl, FormHelperText, FormLabel, Input, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Textarea } from "@chakra-ui/react";
import { nextFocus } from "../../../utils/FormUtils";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function PostResolutionForm(): JSX.Element {

    const year = new Date().getFullYear()

    return <FormControl
        padding={'1dvh 1dvw 1dvh 1dvw'}
        overflowY={'scroll'}
        overflowX={'auto'}
        maxHeight={'50dvh'}
        id="Form"
    >
    <FormLabel>Organismo:</FormLabel>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Seleccione un Organismo
            </MenuButton>{
                <MenuList>
                    <MenuItem>Consejo Mayor</MenuItem>
                    <MenuItem>Mesa Directiva</MenuItem>
                    <MenuItem>Tribunal de Etica</MenuItem>
                </MenuList>}
        </Menu>
        <FormHelperText>Organismo Seleccionado</FormHelperText> <FormLabel>Firmas</FormLabel>
        <Menu closeOnSelect={false}>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon/>}
                >
                Seleccione los miembros Firmantes
            </MenuButton>{
                <MenuList 
                >
                    <MenuOptionGroup 
                    title='Integrantes' 
                    type='checkbox'
                    id='signatures'
                    >
                        <MenuItemOption value='Presidente' >Presidente</MenuItemOption >
                        <MenuItemOption value='Secretario' >Secretario</MenuItemOption >
                        <MenuItemOption value='Vicepresidente' >Vicepresidente</MenuItemOption >
                        <MenuItemOption value='Tesorera' >Tesorera</MenuItemOption >
                        <MenuItemOption value='Vocal' >Vocal</MenuItemOption >
                        <MenuItemOption value='VocalSuplente' >VocalSuplente</MenuItemOption >
                    </MenuOptionGroup>
                </MenuList>}
        </Menu>
        <FormHelperText>Firmantes Seleccionados</FormHelperText>
        <FormLabel>Número:</FormLabel>
        <Input
            className="input"
            id="input1"
            placeholder="Ingrese el nuevo Número de Resolución"
            type='number'
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Año:</FormLabel>
        <Input
            className="input"
            id="input2"
            placeholder="Escriba Nombre completo"
            onKeyDown={(e) => nextFocus(e)}
            type='number'
            defaultValue={year}
        />
        <FormLabel>Fecha:</FormLabel>
        <Input
            className="input"
            id="input3"
            onKeyDown={(e) => nextFocus(e)}
            type='date'
        />
        <FormLabel>Título:</FormLabel>
        <Input
            className="input"
            id="input4"
            placeholder="Título"
            onKeyDown={(e) => nextFocus(e)}
            type={'text'}
        />
        <FormHelperText>Título o tema de la resolución.</FormHelperText>
        <FormLabel>Visto:</FormLabel>
        <Textarea
            className="input"
            id="input5"
            placeholder="Visto"
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Considerando:</FormLabel>
        <Textarea
            className="input"
            id="input6"
            placeholder="Considerando"
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Resuelve:</FormLabel>
        <Textarea
            className="input"
            id="input7"
            placeholder="Resuelve"
        />
       
    </FormControl>
}