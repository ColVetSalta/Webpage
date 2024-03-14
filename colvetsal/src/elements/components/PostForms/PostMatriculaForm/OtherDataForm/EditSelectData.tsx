import { Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Td, Tr, useDisclosure } from "@chakra-ui/react"
import { AdditionalData, IPostTelModalForm } from "../../../../../types"
import { useState } from "react"
import { AiFillDelete } from "react-icons/ai"
import PostAdditionalDataForm from "./PostAdditionalDataForm"

interface EditDataType extends IPostTelModalForm {
    i: number;
    od: AdditionalData
}

export default function EditSelectData(
    { od, i, registered, setRegistered, Validate }: EditDataType
): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [odt, setOdt] = useState<AdditionalData>(od)

    function HandleAccept() {
        const currDataArr = registered.otrodato as AdditionalData[]
        currDataArr.splice(i, 1, odt) 
        console.log(currDataArr);
        Validate({
            ...registered,
            otrodato: currDataArr
        })
        setRegistered({
            ...registered,
            otrodato: currDataArr
        })
    
    }
    
    function onDelete() {
        const currDataArr = registered.otrodato as AdditionalData[]
        currDataArr.splice(i, 1)
        console.log(currDataArr);
        if (currDataArr.length === 0) {
            setRegistered({
                ...registered,
                otrodato: undefined
            })
        } else {
            Validate({
                ...registered,
                otrodato: currDataArr
            })
            setRegistered({
                ...registered,
                otrodato: currDataArr
            })
        }
    }

    return <Tr
        margin={'5dvh 0 5dvh 0'}>
            
            <Td onClick={onOpen} >{od.titulo}</Td>
            <Td onClick={onOpen} >{od.descripcion}</Td>
            <Td onClick={onDelete}><AiFillDelete/></Td>
        <Modal
            isCentered
            isOpen={isOpen}
            onClose={onClose}
            size={'xl'}
            scrollBehavior={'outside'}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Editar Dato</ModalHeader>
                <ModalCloseButton />
                <PostAdditionalDataForm
                    odt={odt}
                    setData={setOdt}
                />
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => { HandleAccept(); onClose() }}>
                        Aceptar
                    </Button>
                    <Button variant='ghost' onClick={() => { setOdt(od); onClose() }}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>

        </Modal>
    </Tr>
}