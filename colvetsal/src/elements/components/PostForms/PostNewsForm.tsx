import { Button, Checkbox, CheckboxGroup, FormControl, FormHelperText, FormLabel, Input, Menu, MenuButton, MenuItem, MenuList, Textarea } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { News } from "../../../types";
import { nextFocus } from "../../../utils/FormUtils";
import { ChangeEvent } from "react";

export interface IPostNewsForm {
    news: News
    setNews: React.Dispatch<React.SetStateAction<News>>
}

export default function PostNewsForm({ news, setNews }: IPostNewsForm): JSX.Element {

    function HandleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setNews({
            ...news,
            [e.target.name]: e.target.value
        })
        console.log(news)
    }
    
    return <FormControl
        overflowY={'scroll'}
        overflowX={'auto'}
        maxHeight={'50dvh'}
        id="Form"
    >
        <FormLabel>Fecha</FormLabel>
        <Input
            className="input"
            id="input1"
            placeholder="Seleccione una fecha"
            type='date'
            name="date"
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
        />
        <FormLabel>Titular</FormLabel>
        <Input
            className="input"
            id="input2"
            placeholder="Titular"
            type='text'
            name='title'
            value={news.title}
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
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
            name='summary'
            value={news.summary ? news.summary : undefined}
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
        />
        <FormLabel>Texto Completo</FormLabel>
        <Textarea
            className="input"
            id="input6"
            placeholder="Aca va el cuerpo completo de la nota"
            name='fulltext'
            value={news.fulltext ? news.fulltext : undefined}
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
        />
        <FormLabel>Imagen</FormLabel>
        <Input
            className="input"
            id="input2"
            placeholder="URL de la Imagen"
            type='text'
            name='image'
            value={news.image ? news.image : undefined}
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
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