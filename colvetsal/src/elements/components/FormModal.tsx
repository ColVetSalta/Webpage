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
import PostMatriculaForm from "./PostForms/PostMatriculaForm/PostMatriculaForm";
import { useRef } from "react";
import PostNewsForm from "./PostForms/PostNewsForm";
import NotAbaliable from "./NotAbaliable";
import { useCurrentState } from "../../utils/CustomHooks";
import { Matriculado, MatriculadoError, News, ResolPost } from "../../types";
import MenuOrganism from "./PostForms/PostResolutionForm/MenuOrganism";
import { useValidate } from "../../utils/Validates";

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
    const { error, Validate } = useValidate(searchHook)


    const btnRef = useRef(null)

    function HandleForm() {
        if (section === 'MATRICULADO') return <PostMatriculaForm
            registered={currentState as Matriculado}
            setRegistered={setCurrentState as React.Dispatch<React.SetStateAction<Matriculado>>}
            error={error as MatriculadoError}
            Validate={Validate as (input: Matriculado) => void  }
            // as { error: MatriculadoError, Validate: (input: Matriculado) => void }
        />
        if (section === 'RESOLUCIONES') return <MenuOrganism
            resolution={currentState as ResolPost}
            setResolution={setCurrentState as React.Dispatch<React.SetStateAction<ResolPost>>}
        />
        if (section === 'NOVEDADES') return <PostNewsForm
            news={currentState as News}
            setNews={setCurrentState as React.Dispatch<React.SetStateAction<News>>}
        />
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
                            HandleSubmit(error)
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