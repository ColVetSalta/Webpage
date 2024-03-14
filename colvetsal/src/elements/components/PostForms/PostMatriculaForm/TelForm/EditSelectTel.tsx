import { Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Td, Tr, useDisclosure } from "@chakra-ui/react"
import { IPostTelModalForm, Telefono } from "../../../../../types"
import PostTelModalForm from "./PostTelModalForm"
import { CheckCircleIcon, NotAllowedIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { AiFillDelete } from "react-icons/ai"

interface EditTelType extends IPostTelModalForm {
    i: number;
    t: Telefono
}

export default function EditSelectTel(
    { t, i, registered, setRegistered, Validate }: EditTelType
): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [tel, setTel] = useState<Telefono>(t)

    const ppal = t.principal ? false : registered.telefono?.map((t)=>t.principal).includes(true);

    function HandleAccept() {
        if (tel.numero !== '') {
            const currTelArr = registered.telefono
            currTelArr.splice(i, 1, tel)
            console.log(currTelArr);
            Validate({
                ...registered,
                telefono: currTelArr
            })
            setRegistered({
                ...registered,
                telefono: currTelArr
            })
        }
    }
    function onDelete() {
        const currTelArr = registered.telefono
        currTelArr.splice(i, 1)
        console.log(currTelArr);
        if (currTelArr.length === 0) {
            setRegistered({
                ...registered,
                telefono: [{ numero: '', whatsapp: false, principal: false, descripcion: '' }]
            })
        } else {
            Validate({
                ...registered,
                telefono: currTelArr
            })
            setRegistered({
                ...registered,
                telefono: currTelArr
            })
        }
    }
    
    return <Tr
        bgColor={t.principal ? 'Highlight' : "inherit"}
        margin={'5dvh 0 5dvh 0'}>
        <Td onClick={onOpen} >{t.numero}</Td>
        <Td onClick={onOpen} >{t.descripcion}</Td>
        <Td onClick={onOpen} >{t.whatsapp ? <CheckCircleIcon color='green' /> : <NotAllowedIcon color='red' />}
        </Td>
        <Td onClick={onDelete}><AiFillDelete /></Td>
        <Modal
            isCentered
            isOpen={isOpen}
            onClose={onClose}
            size={'xl'}
            scrollBehavior={'outside'}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Editar datos Telefónicos</ModalHeader>
                <ModalCloseButton />
                <PostTelModalForm
                    defaultTel={t}
                    tel={tel}
                    setTel={setTel}
                    ppal={ppal}
                />
                {tel.numero.length > 5 && <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => { HandleAccept(); onClose() }}>
                        Aceptar
                    </Button>
                    <Button variant='ghost' onClick={() => { setTel(t); onClose() }}>Cancelar</Button>
                </ModalFooter>}
            </ModalContent>

        </Modal>
    </Tr>
}