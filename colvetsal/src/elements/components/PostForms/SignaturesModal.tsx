import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, CheckboxGroup, Stack, Checkbox, UnorderedList, ListItem, ModalFooter, Button, useDisclosure } from "@chakra-ui/react"
import { Loading } from "../Loading"
import { setDefaultcheckboxValue } from "../../../utils/FormUtils"
import { ChangeEvent } from "react";

export default function SignaturesModal({members, signatures, setSignatures}: {members: string[], signatures: { [key: string]: boolean }, setSignatures: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>}): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const handleChekboxSubmit = (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target
      setSignatures({
          ...signatures,
          [target?.value]: target?.checked
      })
  };

    return <>
    <Button onClick={onOpen}>
    Seleccione los miembros Firmantes
</Button>
<Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Seleccione los miembros Firmantes</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <CheckboxGroup
                        defaultValue={setDefaultcheckboxValue(signatures)}
                    >
                        <Stack
                            spacing={[1, 5]}
                            direction={['column', 'row']}
                            wrap={'wrap'}
                        > {
                                members ?
                                    members.map((m) => {
                                        return <Checkbox
                                            key={m}
                                            name="signatures"
                                            checked={signatures[m as keyof typeof signatures]}
                                            value={m}
                                            onChange={handleChekboxSubmit}
                                        > {
                                                m
                                            } </Checkbox>
                                    }) :
                                    <Loading />
                            }
                        </Stack>
                    </CheckboxGroup>
                    <UnorderedList>
                        {members ? members.map((s) => <>{signatures[s] ? <ListItem>{s}</ListItem> : null} </>) : null}
                    </UnorderedList>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Aceptar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    
}