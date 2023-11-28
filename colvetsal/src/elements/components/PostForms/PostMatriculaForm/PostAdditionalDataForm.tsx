import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { nextFocus } from "../../../../utils/FormUtils";
import { ChangeEvent, useState } from "react";
import { AdditionalData, IPostTelModalForm } from "../../../../types";


export default function PostAdditionalDataForm({ registered, setRegistered }: IPostTelModalForm): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const emptyData = {
    titulo: '',
    descripcion: ''
  }
  const [data, setData] = useState<AdditionalData>(emptyData)

  function HandleChange(e: ChangeEvent<HTMLInputElement>) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  function HandleAccept() {
    if (data.titulo !== '') {
      if (registered.otrodato) {
        setRegistered({
          ...registered,
          otrodato: [...registered.otrodato, data]
        })
      } else setRegistered({
        ...registered,
        otrodato: [data]
      })
    }
    setData(emptyData)
  }


  return <Box>
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
        <ModalBody>
          <FormControl
            overflowY={'scroll'}
            overflowX={'auto'}
            maxHeight={'50dvh'}
            id="Form"
          >
            <FormLabel>Asunto:</FormLabel>
            <Input
              className="input"
              id="input1"
              placeholder="Ejemplo: 'Correo electrónico alternativo'"
              type='text'
              onKeyDown={(e) => nextFocus(e)}
              name='titulo'
              value={data.titulo}
              onChange={HandleChange}
            />
            <FormLabel>Descripcion:</FormLabel>
            <Input
              className="input"
              id="input2"
              placeholder="Detalle"
              onKeyDown={(e) => nextFocus(e)}
              type='text'
              name='descripcion'
              value={data.descripcion}
              onChange={HandleChange}
            />
            <FormHelperText>Opcional: Escriba breve descripcion o dato accesorio</FormHelperText>
          </FormControl>
        </ModalBody>

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
  </Box>

}