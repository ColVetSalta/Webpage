import { 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from "@chakra-ui/react";

export type FormModalType = {
    isOpen: boolean, 
    onClose: () => void, 
    section: {
    subindexTitle: string;
    url: string;
}}

export default function FormModal({ isOpen, onClose, section }: FormModalType): JSX.Element {
    return <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
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
}