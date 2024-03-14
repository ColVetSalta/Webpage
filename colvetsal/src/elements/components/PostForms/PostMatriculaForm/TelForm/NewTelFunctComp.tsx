import { Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { IPostTelModalForm, Telefono } from "../../../../../types"
import PostTelModalForm from "./PostTelModalForm"
import { useState } from "react"

export default function NewTelFunctComp(
    { registered, setRegistered, Validate }: IPostTelModalForm
): JSX.Element {
    const emptyTel = {
        numero: '',
        whatsapp: false,
        principal: false,
        descripcion: ''
    }

    const [tel, setTel] = useState<Telefono>(emptyTel)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const ppal = registered.telefono?.map((t)=>t.principal).includes(true);
    console.log(ppal);
    

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
        setTel(emptyTel)
    }

    return <div>
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
                <ModalHeader>Añadir datos Telefónicos</ModalHeader>
                <ModalCloseButton />
                <PostTelModalForm
                    defaultTel={emptyTel}
                    tel={tel}
                    setTel={setTel}
                    ppal={ppal}
                />
                {tel.numero.length > 5 && <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => { HandleAccept(); onClose() }}>
                        Aceptar
                    </Button>
                    <Button colorScheme='blue' mr={3} onClick={() => { HandleAccept() }}>
                        Aceptar y Agregar otro
                    </Button>
                    <Button variant='ghost' onClick={() => { setTel(emptyTel); onClose() }}>Cancelar</Button>
                </ModalFooter>}
            </ModalContent>
        </Modal>
    </div>
}