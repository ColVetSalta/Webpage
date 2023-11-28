import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, CheckboxGroup, Stack, Checkbox, UnorderedList, ListItem, ModalFooter, Button, useDisclosure } from "@chakra-ui/react"
import { Loading } from "../../Loading"
import { setDefaultcheckboxValue } from "../../../../utils/FormUtils"
import { ChangeEvent } from "react";
import { IResolutionForm, Members } from "./MenuOrganism";

export interface ISignaturesModal extends IResolutionForm {
    members: Members
    // signatures: { [key: string]: boolean } | null
    // firma: number[]
    // setFirma: React.Dispatch<React.SetStateAction<number[]>>
    signatures: { [key: string]: boolean }
    setSignatures: React.Dispatch<React.SetStateAction<{
        [key: string]: boolean;
    }>>
}

export default function SignaturesModal({
    members,
    // firma,
    // setFirma,
    resolution,
    setResolution,
    signatures,
    setSignatures
}: ISignaturesModal): JSX.Element {

    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleChekbox (e: ChangeEvent<HTMLInputElement>, periodoId: number) {
        setSignatures({
            ...signatures,
            [e.target.value]: e.target.checked
        })
        if (!e.target.checked) {
            const i = resolution.firmas.indexOf(periodoId)
            const newFirma = resolution.firmas
            newFirma.splice(i, 1)
            newFirma.length === 0 && newFirma.push(0)
            setResolution({
                ...resolution,
                firmas: newFirma
            })
        } else if (resolution.firmas[0] === 0) {
            setResolution({
                ...resolution,
                firmas: [periodoId]
            })
        } else {
            setResolution({
                ...resolution,
                firmas: [...resolution.firmas, periodoId]
            })
        }
    }
    const handleSubmit = () => {
        onClose()
    }
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
                        defaultValue={members.length > 1 ? setDefaultcheckboxValue(signatures) : undefined}
                    >
                        <Stack
                            spacing={[1, 5]}
                            direction={['column', 'row']}
                            wrap={'wrap'}
                        > {
                                members ?
                                    members.map((m) => {
                                        const ind = resolution.orgid === 'Consejo Mayor' ? m[0] + ' ' + m[1] + ' ' + m[3] : m[1] + ' ' + m[3]                                        
                                        return <Checkbox
                                            key={m[4]}
                                            name="signatures"
                                            checked={signatures !== null && signatures[(m[0] + m[1]) as keyof typeof signatures]}
                                            value={m[1]}
                                            onChange={(e) => handleChekbox(e, m[4])}
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
                            return <>{(signatures && signatures[s[4] as keyof typeof signatures]) ?
                                <ListItem>{ind}</ListItem> : null} </>
                        }) :
                            null
                        }
                    </UnorderedList>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                        Aceptar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal >
    </>
}