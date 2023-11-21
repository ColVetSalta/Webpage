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
import PostMatriculaForm from "./PostForms/PostMatriculaForm";
import { useRef } from "react";
import PostResolutionForm from "./PostForms/PostResolutionForm";
import PostNewsForm from "./PostForms/PostNewsForm";

export type FormModalType = {
    section: {
        subindexTitle: string;
        url: string;
    }
}

export default function FormModal( {section}: {section : string}): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const btnRef = useRef(null)

    function HandleForm() {
        if (section === 'MATRICULADOS') return <PostMatriculaForm />
        if (section === 'RESOLUCIONES') return <PostResolutionForm />
        if (section === 'NOVEDADES') return <PostNewsForm />
        if (section === 'NORMATIVA') return <PostResolutionForm />
        if (section === 'HISTORIA') return <PostNewsForm />
        if (section === 'AUTORIDADES') return <PostNewsForm />


    }

    return <Box>
        <Button onClick={onOpen} margin={'5dvh 0 5dvh 0'}>
            {section}
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
                <ModalHeader>{section}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {HandleForm()}
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