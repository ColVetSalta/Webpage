import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    FormControl,
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
    useDisclosure
} from "@chakra-ui/react";
import { nextFocus, setDefaultcheckboxValue } from "../../../utils/FormUtils";
import { IPostTelModalForm, Telefono } from "../../../types";
import { ChangeEvent, useState } from "react";


export default function PostTelModalForm(
    { registered, setRegistered }: IPostTelModalForm
): JSX.Element {
    const emptyTel = {
        numero: '',
        whatsapp: false,
        principal: false,
        descripcion: ''
    }
    const [tel, setTel] = useState<Telefono>(emptyTel)
    const { isOpen, onOpen, onClose } = useDisclosure()
    function HandleChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'check') {
            setTel({
                ...tel,
                [e.target.value]: e.target.checked
            })
        } else if (e.target.value) {
            setTel({
                ...tel,
                [e.target.name]: e.target.value
            })
        }
    }

    function HandleAccept() {
        if (tel.numero !== '') {
            if (registered.telefono[0].numero === '') {
                setRegistered({
                    ...registered,
                    telefono: [tel]
                })
            } else {
                setRegistered({
                    ...registered,
                    telefono: [...registered.telefono, tel]
                })
            }
        }
        setTel(emptyTel)
    }
    
    return <Box>
        <Button onClick={onOpen} margin={'5dvh 0 5dvh 0'}>Añadir nuevo Telefono</Button>
        <Modal
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
                    <Button variant='ghost' onClick={() => { setTel(emptyTel); onClose() }}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>

}