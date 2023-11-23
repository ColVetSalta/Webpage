import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, CheckboxGroup, Stack, Checkbox, UnorderedList, ListItem, ModalFooter, Button, useDisclosure } from "@chakra-ui/react"
import { Loading } from "../Loading"
import { setDefaultcheckboxValue } from "../../../utils/FormUtils"
import { ChangeEvent } from "react";

export interface ISignaturesModal {
    members: (string | number)[][]
    signatures: { [key: string]: boolean } | null
    setSignatures: React.Dispatch<React.SetStateAction<{ [key: string]: boolean } | null>>
    firma: number[]
    setFirma: React.Dispatch<React.SetStateAction<number[]>>
}

export default function SignaturesModal({ members, signatures, setSignatures, firma, setFirma }: ISignaturesModal): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleChekboxSubmit = (e: ChangeEvent<HTMLInputElement>, periodo: number) => {
        const target = e.target
        setSignatures({
            ...signatures,
            [target?.value]: target?.checked
        })
    console.log('Nuevo Objeto signatures(selectas): ', signatures)
        setFirma([...firma, periodo])
    console.log('Nuevo Array de firmaID(Para el envío - Periodo.id[]): ', firma)
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
                        defaultValue={signatures !== null ? setDefaultcheckboxValue(signatures) : undefined}
                    >
                        <Stack
                            spacing={[1, 5]}
                            direction={['column', 'row']}
                            wrap={'wrap'}
                        > {
                                members ?
                                    members.map((m) => {
                                        const ind = m[0] + ' ' + m[1] + ' ' + m[3]
                                        return <Checkbox
                                            key={m[4]}
                                            name="signatures"
                                            checked={signatures !== null && signatures[ind as keyof typeof signatures]}
                                            value={ind}
                                            onChange={(e)=>handleChekboxSubmit(e, m[4] as number)}
                                        > {
                                                ind
                                            } </Checkbox>
                                    }) :
                                    <Loading />
                            }
                        </Stack>
                    </CheckboxGroup>
                    <UnorderedList>
                        {members ? members.map((s) => {
                            const ind = s[0] + ' ' + s[1] + ' ' + s[3]
                            return <>{(signatures && signatures[ind as keyof typeof signatures]) ?
                                <ListItem>{ind}</ListItem> : null} </>
                        }) :
                            null
                        }
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