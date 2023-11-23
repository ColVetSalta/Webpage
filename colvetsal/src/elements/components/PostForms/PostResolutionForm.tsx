import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Textarea} from "@chakra-ui/react";
import { nextFocus } from "../../../utils/FormUtils";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import SignaturesModal from "./SignaturesModal";
import { ResolPost } from "../../../types";
import { useAppSelector } from "../../../redux/hooks";


export interface IPostResolutionForm {
    resolution: ResolPost
    setResolution: React.Dispatch<React.SetStateAction<ResolPost>>
}

export default function PostResolutionForm({ resolution, setResolution }: IPostResolutionForm): JSX.Element {
    // const { organism } = useAppSelector((state) => state.org)
    const members = ['Presidente', 'Secretario', 'Tesorera', 'Vicepresidente', 'Vocal', 'Vocal Suplente 1', 'Vocal Suplente 2']
    // set initial state form members Array to an Object
    // eslint-disable-next-line no-constant-condition
    const memberInitialSate = members.reduce((o, key) => ({ ...o, [key]: false }), {})
    const [signatures, setSignatures] = useState<{ [key: string]: boolean }>(memberInitialSate)

    const year = new Date().getFullYear()
    // const firmas = organism.
    // })

    function HandleChange(
        // e: ChangeEvent<HTMLInputElement>
        ) {

        setResolution({
    //         ...resolution,
    //         [e.target.name as keyof typeof resolution]: e.target.value,
    //         firmas: signatures
        })
    }


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
        <FormHelperText>Organismo Seleccionado</FormHelperText>
        <FormLabel>Número:</FormLabel>
        <Input
            className="input"
            id="input1"
            placeholder="Ingrese el nuevo Número de Resolución"
            onChange={HandleChange}
            type='number'
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Año:</FormLabel>
        <Input
            className="input"
            id="input2"
            placeholder="Escriba Nombre completo"
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
            type='number'
            defaultValue={year}
        />
        <FormLabel>Fecha:</FormLabel>
        <Input
            className="input"
            id="input3"
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
            type='date'
        />
        <FormLabel>Título:</FormLabel>
        <Input
            className="input"
            id="input4"
            placeholder="Título"
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
            type={'text'}
        />
        <FormHelperText>Título o tema de la resolución.</FormHelperText>
        <FormLabel>Visto:</FormLabel>
        <Textarea
            className="input"
            id="input5"
            onChange={HandleChange}
            placeholder="Visto"
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Considerando:</FormLabel>
        <Textarea
            className="input"
            id="input6"
            onChange={HandleChange}
            placeholder="Considerando"
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Resuelve:</FormLabel>
        <Textarea
            className="input"
            onChange={HandleChange}
            id="input7"
            placeholder="Resuelve"
        />
        <FormLabel>Firmas</FormLabel>
        <SignaturesModal
        members={members}
        signatures={signatures}
        setSignatures={setSignatures}
        />
        <FormHelperText>Firmantes Seleccionados
            {members ? members.map((s) => <Text>{signatures[s] ? s : null}</Text>) : null}
        </FormHelperText>
    </FormControl >
}