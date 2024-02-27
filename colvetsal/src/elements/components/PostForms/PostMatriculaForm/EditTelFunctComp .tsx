import { Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tbody, Td, Tr, useDisclosure } from "@chakra-ui/react"
import { IPostTelModalForm, Telefono } from "../../../../types"
import PostTelModalForm from "./PostTelModalForm"
import { CheckCircleIcon, NotAllowedIcon } from "@chakra-ui/icons"
import { useState } from "react"

export default function EditTelFunctComp(
    { registered, setRegistered, Validate }: IPostTelModalForm
): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()
return <Tbody>
{(registered.telefono !== undefined && registered.telefono[0].numero === '') ?
<Tr>
    <Td>Numero</Td>
    <Td>Desctrpción (opcional)</Td>
    <Td>Whatsapp</Td>
</Tr> :
registered.telefono?.map((t)=> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tel, setTel] = useState<Telefono>(t)
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
    }
return <Tr
bgColor={t.principal ? 'Highlight' : "inherit"}
    onClick={onOpen} margin={'5dvh 0 5dvh 0'}>
    <Td>{t.numero}</Td>
    <Td>{t.descripcion}</Td>
    <Td>{t.whatsapp ? <CheckCircleIcon color='green'/> : <NotAllowedIcon color='red'/>}
    </Td>
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
                    />
                    { tel.numero.length > 5 && <ModalFooter>
                     <Button colorScheme='blue' mr={3} onClick={() => { HandleAccept(); onClose() }}>
                         Aceptar
                     </Button>
                     <Button variant='ghost' onClick={() => { setTel(t); onClose() }}>Cancelar</Button>
                 </ModalFooter>}
             </ModalContent>  
                    
        </Modal>
        </Tr>} )
                    }
                </Tbody>
}