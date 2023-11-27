import {
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Text,
    Textarea
} from "@chakra-ui/react";
import { nextFocus } from "../../../utils/FormUtils";
import { ChangeEvent, useState } from "react";
import SignaturesModal from "./SignaturesModal";
import { IResolutionForm, Members } from "./MenuOrganism";

export interface IPostResolutionForm extends IResolutionForm {
members: Members
}

export default function PostResolutionForm({ resolution, setResolution, members }: IPostResolutionForm): JSX.Element {

    const year = new Date().getFullYear()
    // const firmas = organism.
    // })
    const memberInitialSate: { [key: string]: boolean } = members.reduce((o, key) => ({ ...o, [key[1]]: false }), {})
    const [signatures, setSignatures] = useState<{ [key: string]: boolean }>(memberInitialSate)

    function HandleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setResolution({
            ...resolution,
            [e.target.name as keyof typeof resolution]: e.target.value,
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
        
        <FormHelperText>Organismo Seleccionado: {resolution.orgid}</FormHelperText>
        <FormLabel>Número:</FormLabel>
        <Input
            className="input"
            id="input1"
            placeholder="Ingrese el nuevo Número de Resolución"
            onChange={HandleChange}
            name="num"
            value={resolution.num}
            type='number'
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Año:</FormLabel>
        <Input
            className="input"
            id="input2"
            name="year"
            value={resolution.year}
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
            name="fecha"
            value={resolution.fecha}            
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
            type='date'
        />
        <FormLabel>Título:</FormLabel>
        <Input
            className="input"
            id="input4"
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
                    // firma={firma}
                    // setFirma={setFirma}
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