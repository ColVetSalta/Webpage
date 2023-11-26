import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, CheckboxGroup, Stack, Checkbox, UnorderedList, ListItem, ModalFooter, Button, useDisclosure } from "@chakra-ui/react"
import { Loading } from "../Loading"
import { setDefaultcheckboxValue } from "../../../utils/FormUtils"
import { ChangeEvent } from "react";
import { IResolutionForm, Members } from "./MenuOrganism";

export interface ISignaturesModal extends IResolutionForm {
    members: Members
    // signatures: { [key: string]: boolean } | null
    firma: number[]
    setFirma: React.Dispatch<React.SetStateAction<number[]>>
    signatures: { [key: string]: boolean }
    setSignatures: React.Dispatch<React.SetStateAction<{
        [key: string]: boolean;
    }>>
}

export default function SignaturesModal({
    members,
    firma,
    setFirma,
    resolution,
    setResolution,
    signatures,
    setSignatures
}: ISignaturesModal): JSX.Element {
    // const fillSign = members.reduce 

    // const [signatures, setSignatures] = useSelect()

    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log(members);

    const handleChekbox = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(members[0][4])        
        const member = members?.find((v) => { 
            console.log(v)
            console.log(v[1])
            console.log(e.target.value)
            console.log(v[1] === e.target.value)
            console.log(e.target.checked)
            return v[1] === e.target.value })
        console.log(member)        
        if (member !== undefined) {
            setSignatures({
                ...signatures,
                [e.target.value]: e.target.checked
            })
            console.log(member[4])
            console.log(firma[0] === 0)    
            
            if(e.target.checked){        
                if (firma[0] === 0) {
                    setFirma([member[4]])
                } else { 
                    setFirma([...firma, member[4]])
                }
            } else {
                const index = firma.indexOf(member[4])
                setFirma(firma.splice(index, 1))
            }
        }
        console.log('Nuevo Array de firmaID(Para el envío - Periodo.id[]): ', firma)
    };
    const handleSubmit = () => {
        (() => {
            for (const key in signatures) {
                const member = members?.find((v) => { v[1] === key })
                if (member !== undefined) {
                    if(signatures[key]){
                setFirma([...firma, member[4]])
            } else {
                const index = firma.indexOf(member[4])
                setFirma(firma.splice(index, 1))

            }   
                     }
            }
        })();

        setResolution({
            ...resolution,
            firmas: firma
        })
        console.log(resolution)
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
                                        const ind = m[0] + ' ' + m[1] + ' ' + m[3]
                                        return <Checkbox
                                            key={m[4]}
                                            name="signatures"
                                            checked={signatures !== null && signatures[(m[0] + m[1]) as keyof typeof signatures]}
                                            value={m[1]}
                                            onChange={(e) => handleChekbox(e)}
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