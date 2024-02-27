import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    UseDisclosureProps,
} from "@chakra-ui/react";
import { nextFocus, setDefaultcheckboxValue } from "../../../../utils/FormUtils";
import { IPostTelModalForm, Telefono, TelefonoError } from "../../../../types";
import { ChangeEvent, useState } from "react";
// import ValTelephone from "../../../../utils/ValTelefono";

interface TelForm extends IPostTelModalForm {
    defaultTel: Telefono;
    disclosure: UseDisclosureProps
}
export default function PostTelModalForm(
    { registered, setRegistered, Validate, defaultTel, disclosure }: TelForm
): JSX.Element {
    const [tel, setTel] = useState<Telefono>(defaultTel)
    const [vTel, setVTel] = useState<TelefonoError>(defaultTel)
    const { isOpen, onClose } = disclosure

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

    function HandleAccept() {
        if (tel.numero !== '') {
            if (registered.telefono[0].numero === '') {
                Validate({
                    ...registered,
                    telefono: [tel]
                })
                setRegistered({
                    ...registered,
                    telefono: [tel]
                })
            } else {
                Validate({
                    ...registered,
                    telefono: [...registered.telefono, tel]
                })
                setRegistered({
                    ...registered,
                    telefono: [...registered.telefono, tel]
                })
            }
        }
        setTel(defaultTel)
    }

    return <Box>
        {isOpen && onClose && <Modal
            isCentered
            isOpen={isOpen}
            onClose={onClose}
            size={'xl'}
            scrollBehavior={'outside'}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
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
                            placeholder="Escriba Nombre completo"
                            onKeyDown={(e) => nextFocus(e)}
                            type='text'
                            name='descripcion'
                            value={tel.descripcion}
                            onChange={HandleChange}
                        />
                        <FormLabel>Opcional: Escriba breve descripcion o dato accesorio</FormLabel>
                        <Stack>
                            <CheckboxGroup
                                defaultValue={setDefaultcheckboxValue({
                                    principal: tel.principal,
                                    whatsapp: tel.whatsapp
                                })}
                            >
                                <Checkbox
                                    className="input"
                                    id="input3"
                                    onKeyDown={(e) => nextFocus(e)}
                                    name='check'
                                    value='principal'
                                    checked={tel.principal}
                                    onChange={HandleChange}>Es el principal</Checkbox>
                                <Checkbox
                                    className="input"
                                    id="input4"
                                    onKeyDown={(e) => nextFocus(e)}
                                    name='check'
                                    value='whatsapp'
                                    checked={tel.whatsapp}
                                    onChange={HandleChange}>Tiene Whatsapp</Checkbox></CheckboxGroup>

                        </Stack>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => { HandleAccept(); onClose() }}>
                        Aceptar
                    </Button>
                    <Button colorScheme='blue' mr={3} onClick={HandleAccept}>
                        Aceptar y Agregar otro
                    </Button>
                    <Button variant='ghost' onClick={() => { setTel(defaultTel); onClose() }}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        }
    </Box>

}