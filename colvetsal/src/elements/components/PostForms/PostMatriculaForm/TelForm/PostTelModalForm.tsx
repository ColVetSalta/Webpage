import {
    Checkbox,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    ModalBody,
    Stack,
} from "@chakra-ui/react";
import { nextFocus } from "../../../../../utils/FormUtils";
import { Telefono, TelefonoError } from "../../../../../types";
import { ChangeEvent, useState } from "react";

interface TelForm {
    tel: Telefono;
    defaultTel: Telefono;
    setTel: React.Dispatch<React.SetStateAction<Telefono>>
    ppal: boolean
}
export default function PostTelModalForm(
    { tel, defaultTel, setTel, ppal }: TelForm
): JSX.Element {

    const [vTel, setVTel] = useState<TelefonoError>(defaultTel)

    function ValidatePhone(input: Telefono) {
        if (input.numero.length === 0) {
            if (input.descripcion.length > 0 || input.principal || input.whatsapp) {
                setVTel({
                    ...vTel,
                    numero: "Debe ingresar el número",
                })
            }
        } else {
            setVTel({
                ...vTel,
                numero: "pass",
            })
        }
    }
    function HandleChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        if (e.target.name === 'check') {
            ValidatePhone({
                ...tel,
                [e.target.value]: e.target.checked
            })
            setTel({
                ...tel,
                [e.target.value]: e.target.checked
            })
        } else if (e.target.value) {
            ValidatePhone({
                ...tel,
                [e.target.name]: e.target.value
            })
            setTel({
                ...tel,
                [e.target.name]: e.target.value
            })
        }
    }
    
    return <ModalBody>
        <FormControl
    
            overflowY={'scroll'}
            overflowX={'auto'}
            maxHeight={'50dvh'}
            id="Form"
        >
            <FormLabel>Numero:</FormLabel>
            <Input
                className="input"
                id="input1"
                placeholder="Ingrese el nuevo Número de telefono"
                type='text'
                onKeyDown={(e) => nextFocus(e)}
                name='numero'
                value={tel.numero}
                onChange={HandleChange}
            />
            <FormHelperText>{vTel.numero === 'pass' ? null : vTel.numero}</FormHelperText>

            <FormLabel>Descripcion:</FormLabel>
            <Input
                className="input"
                id="input2"
                placeholder="Descripcion adicional"
                onKeyDown={(e) => nextFocus(e)}
                type='text'
                name='descripcion'
                value={tel.descripcion}
                onChange={HandleChange}
            />
            <FormLabel>Opcional: Escriba breve descripcion o dato accesorio</FormLabel>
            <Stack>
                    <Checkbox
                    isDisabled={ppal}
                        className="input"
                        id="input3"
                        onKeyDown={(e) => nextFocus(e)}
                        name='check'
                        value='principal'
                        isChecked={tel.principal}
                        onChange={HandleChange}>Es el principal</Checkbox>
                    <Checkbox
                        className="input"
                        id="input4"
                        onKeyDown={(e) => nextFocus(e)}
                        name='check'
                        value='whatsapp'
                        isChecked={tel.whatsapp}
                        onChange={HandleChange}>Tiene Whatsapp</Checkbox>
            </Stack>
        </FormControl>
    </ModalBody>
}