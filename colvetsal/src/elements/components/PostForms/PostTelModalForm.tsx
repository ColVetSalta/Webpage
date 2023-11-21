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
import { Telefono } from "../../../types";
import { ChangeEvent, useState } from "react";

// export interface IPostTelModalForm {
//     registered: Matriculado;
//     setRegistered: React.Dispatch<React.SetStateAction<Matriculado>>
// }

export default function PostTelModalForm(
    // { registered, setRegistered }: IPostTelModalForm
    ): JSX.Element {
    const [tel, setTel] = useState<Telefono>({
        numero: '',
        whatsapp: false,
        principal: false,
        descripcion: ''
    })
    const { isOpen, onOpen, onClose } = useDisclosure()
    function HandleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.checked)    
    if(e.target.name === 'check'){
        setTel({
            ...tel,
            [e.target.value]: e.target.checked
        })
    } else if(e.target.value){
        setTel({
            ...tel,
            [e.target.name]: e.target.value
        })
    }
    }

    console.log(tel)    

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
                                    whatsapp: tel.whatsapp})}
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
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>

}