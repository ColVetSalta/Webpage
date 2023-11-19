import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
} from "@chakra-ui/react";
import PostingForms from "../PostingMatForm/PostingMatForm";
import { useRef } from "react";

export type FormModalType = {
    section: {
        subindexTitle: string;
        url: string;
    }
}

export default function FormModal({ section }: FormModalType): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
  const btnRef = useRef(null)

    return <Box>
        <Button onClick={onOpen} margin={'5dvh 0 5dvh 0'}>
            {section.subindexTitle}
        </Button>

        <Modal 
        isCentered 
        isOpen={isOpen} 
        onClose={onClose}  
        finalFocusRef={btnRef}   
        size={'xl'}   
        scrollBehavior={'outside'}
        >
            <ModalOverlay
                bg='none'
                backdropFilter='auto'
                backdropInvert='80%'
                backdropBlur='2px'
            />
            <ModalContent
                marginBlockStart={'15dvh'}
                bg='white'
                width={'80dvw'}
                height={'80dvh'}
            >
                <ModalHeader>{section.subindexTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <PostingForms />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Enviar
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>

}