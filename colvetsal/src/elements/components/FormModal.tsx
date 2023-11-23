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
import NotAbaliable from "./NotAbaliable";
import { useCurrentState } from "../../utils/CustomHooks";
import { Matriculado, Resol } from "../../types";

export type FormModalType = {
    section: {
        subindexTitle: string;
        url: string;
    }
}

export default function FormModal({ section }: { section: string }): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const searchHook = isOpen ? section : ''
    const { currentState, setCurrentState, HandleSubmit } = useCurrentState(searchHook)

    const btnRef = useRef(null)

    function HandleForm() {
        if (section === 'MATRICULADO') return <PostMatriculaForm
            registered={currentState as Matriculado}
            setRegistered={setCurrentState as React.Dispatch<React.SetStateAction<Matriculado>>}
        />
        if (section === 'RESOLUCIONES') return <PostResolutionForm
            resolution={currentState as Resol}
            setResolution={setCurrentState as React.Dispatch<React.SetStateAction<Resol>>}
        />
        if (section === 'NOVEDADES') return <PostNewsForm />
        if (section === 'NORMATIVA') return <NotAbaliable />
        if (section === 'HISTORIA') return <NotAbaliable />
        if (section === 'AUTORIDADES') return <NotAbaliable />


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
                    <form
                        id="matForm">
                        {HandleForm()}
                    </form>
                </ModalBody>

                <ModalFooter>
                    <Button
                        colorScheme='blue'
                        mr={3}
                        type="submit"
                        onClick={() => {
                            HandleSubmit()
                            onClose()
                        }}>
                        Enviar
                    </Button>
                    <Button variant='ghost' onClick={onClose}>Cancelar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box >

}