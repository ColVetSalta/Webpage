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

export type FormModalType = {
    section: {
        subindexTitle: string;
        url: string;
    }
}

export default function FormModal({ section }: FormModalType): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return <Box
    key={section.subindexTitle}>
        <Button onClick={onOpen}>
            {section.subindexTitle}
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
             marginBlockStart={'15dvh'} >
                <ModalHeader>{section.subindexTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Formulario
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