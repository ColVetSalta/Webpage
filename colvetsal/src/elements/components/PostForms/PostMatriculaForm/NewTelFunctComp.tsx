import { Button, Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { IPostTelModalForm, Matriculado } from "../../../../types"
import PostTelModalForm from "./PostTelModalForm"

export default function NewTelFunctComp(
    { registered, setRegistered, Validate }: IPostTelModalForm
): JSX.Element {
    const emptyTel = {
        numero: '',
        whatsapp: false,
        principal: false,
        descripcion: ''
    }
    
    const { isOpen, onOpen, onClose } = useDisclosure()
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
    <PostTelModalForm 
                registered={registered}
                setRegistered={setRegistered}            
                Validate={Validate as (input: Matriculado) => void }
                defaultTel={emptyTel}
                disclosure={{ isOpen, onOpen, onClose }}
                    />
                    
        </Modal>
</div>
}