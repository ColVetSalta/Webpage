import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Stack,
    Text,
    Textarea
} from "@chakra-ui/react";
import { HandleInputNumFirstFocus, nextFocus } from "../../../utils/FormUtils";
import { ChangeEvent, useState } from "react";
import SignaturesModal from "./SignaturesModal";
import { IResolutionForm, Members } from "./MenuOrganism";

export interface IPostResolutionForm extends IResolutionForm {
members: Members
}

export default function PostResolutionForm({ resolution, setResolution, members }: IPostResolutionForm): JSX.Element {

    const memberInitialSate: { [key: string]: boolean } = members.reduce((o, key) => ({ ...o, [key[1]]: false }), {})
    const [signatures, setSignatures] = useState<{ [key: string]: boolean }>(memberInitialSate)

    function HandleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setResolution({
            ...resolution,
            year: new Date(resolution.fecha).getFullYear(),
            [e.target.name as keyof typeof resolution]: e.target.value,
        })
    }
console.log(resolution);

    return <FormControl
        padding={'1dvh 1dvw 1dvh 1dvw'}
        overflowY={'scroll'}
        overflowX={'auto'}
        maxHeight={'50dvh'}
        id="Form"
    >
        <FormLabel>Organismo:</FormLabel>
        
        <FormHelperText>Organismo Seleccionado: {resolution.orgid}</FormHelperText>
        
        <FormLabel>Fecha:</FormLabel>
        <Input
            className="input"
            id="input1"
            name="fecha"
            value={resolution.fecha}            
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
            type='date'
        />
        <FormLabel>Número:</FormLabel>
        <Stack
        flexDirection={"row"}>
        <Input
        width={'8rem'}
            className="input"
            id="input2"
            placeholder="Ingrese el nuevo Número de Resolución"
            onChange={HandleChange}
            name="num"
            value={resolution.num}
            type='number'
            onKeyDown={(e) => nextFocus(e)}
            onFocus={HandleInputNumFirstFocus}
        /><Text> /{resolution.year}</Text></Stack>
        <FormLabel>Título:</FormLabel>
        <Input
            className="input"
            id="input3"
            name="titulo"
            value={resolution.titulo}   
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
            name="visto"
            value={resolution.visto}   
            onChange={HandleChange}
            placeholder="Visto"
        />
        <FormLabel>Considerando:</FormLabel>
        <Textarea
            className="input"
            id="input6"
            name="considerando"
            value={resolution.considerando}   
            onChange={HandleChange}
            placeholder="Considerando"
        />
        <FormLabel>Resuelve:</FormLabel>
        <Textarea
            className="input"
            onChange={HandleChange}
            id="input7"
            name="resuelve"
            value={resolution.resuelve}   
            placeholder="Resuelve"
        />
        <FormLabel>Firmas</FormLabel>
        {
        members.length > 1 ?
                <SignaturesModal
                    members={members}
                    resolution={resolution}
                    setResolution={setResolution}
                    signatures={signatures} 
                    setSignatures={setSignatures}                
                /> :
                null
        }
        <FormHelperText>Firmantes Seleccionados
            {signatures ? Object.keys(signatures).map((s) => <Text>{(signatures && signatures[s]) ? s : null}</Text>) : null}
        </FormHelperText>
    </FormControl >
}