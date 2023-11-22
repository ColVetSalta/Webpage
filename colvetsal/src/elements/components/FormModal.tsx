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
import { useRef, useState } from "react";
import PostResolutionForm from "./PostForms/PostResolutionForm";
import PostNewsForm from "./PostForms/PostNewsForm";
import NotAbaliable from "./NotAbaliable";
import axios from "axios";
import { Matriculado } from "../../types";

export type FormModalType = {
    section: {
        subindexTitle: string;
        url: string;
    }
}

export default function FormModal({ section }: { section: string }): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [registered, setRegistered] = useState<Matriculado>({
        mp: 0,
        nombre: '',
        apellido: '',
        correo_electronico: '',
        f_nacimiento: new Date(),
        domicilio_particular: '',
        domicilio_laboral: '',
        departamento_d_laboral: '',
        f_alta: new Date(),
        active: false,
        telefono: [{
            numero: '',
            whatsapp: false,
            principal: false,
            descripcion: '',
        }],
    })

    const btnRef = useRef(null)

    async function HandleSubmit() {
        setRegistered({...registered, active: true})
        await axios.post('/matriculado', registered)
            .then((res) => alert(`Nuevo Matriculado: ${res.data.nombre} ${res.data.apellido} registrado correctamente con la matrícula N°: ${res.data.mp}`))
    }

    function HandleForm() {
        if (section === 'MATRICULADOS') return <PostMatriculaForm registered={registered} setRegistered={setRegistered} />
        if (section === 'RESOLUCIONES') return <PostResolutionForm />
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