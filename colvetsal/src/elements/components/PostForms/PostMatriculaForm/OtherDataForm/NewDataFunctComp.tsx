import { Button, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { AdditionalData, IPostTelModalForm } from "../../../../../types"
import { useState } from "react"
import PostAdditionalDataForm from "./PostAdditionalDataForm"

export default function NewDataFunctComp(
    { registered, setRegistered, Validate }: IPostTelModalForm
): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const emptyData = {
    titulo: '',
    descripcion: ''
  }
  const [odt, setData] = useState<AdditionalData>(emptyData)

  function HandleAccept() {
    if (odt.titulo !== '') {
      if (registered.otrodato) {
        Validate({
          ...registered,
          otrodato: [...registered.otrodato, odt]
        })
        setRegistered({
          ...registered,
          otrodato: [...registered.otrodato, odt]
        })
      } else setRegistered({
        ...registered,
        otrodato: [odt]
      })
    }
    setData(emptyData)
  }


    return <div>
        <Button onClick={onOpen} margin={'5dvh 0 5dvh 0'}>Datos Adicionales</Button>
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size={'xl'}
      scrollBehavior={'outside'}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Nuevo Dato Adicional</ModalHeader>
        <ModalCloseButton />
                <PostAdditionalDataForm
                    odt={odt}
                    setData={setData}
                />
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={() => { HandleAccept(); onClose() }}>
            Aceptar
          </Button>
          <Button colorScheme='blue' mr={3} onClick={HandleAccept}>
            Aceptar y Agregar otro
          </Button>
          <Button variant='ghost' onClick={() => { setData(emptyData); onClose() }}>Cancelar</Button>
        </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
}