import {
    Button,
    Checkbox,
    CheckboxGroup,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    ListItem,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    Textarea,
    UnorderedList,
    useDisclosure
} from "@chakra-ui/react";
import { nextFocus } from "../../../utils/FormUtils";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Loading } from "../Loading/Loading";
import { ChangeEvent, useState } from "react";

export default function PostResolutionForm(): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const members = ['Presidente', 'Secretario', 'Tesorera', 'Vicepresidente', 'Vocal', 'Vocal Suplente 1', 'Vocal Suplente 2']
    // eslint-disable-next-line no-constant-condition
    const memberInitialSate = members.reduce((o, key) => ({ ...o, [key]: false }), {})
    const [signatures, setSignatures] = useState<{ [key: string]: boolean }>(memberInitialSate)

    const year = new Date().getFullYear()

    const handleChekboxSubmit = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target
        setSignatures({
            ...signatures,
            [target?.value]: target?.checked
        })
    };
    const setDefaultcheckboxValue = ()=>{
        const list: string[] = ['']
        for (const key in signatures) {
            if (Object.prototype.hasOwnProperty.call(signatures, key)) {
                signatures[key] && list.push(key)  
            }
        }
        return list
    }

    return <FormControl
        padding={'1dvh 1dvw 1dvh 1dvw'}
        overflowY={'scroll'}
        overflowX={'auto'}
        maxHeight={'50dvh'}
        id="Form"
    >
        <FormLabel>Organismo:</FormLabel>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Seleccione un Organismo
            </MenuButton>{
                <MenuList>
                    <MenuItem>Consejo Mayor</MenuItem>
                    <MenuItem>Mesa Directiva</MenuItem>
                    <MenuItem>Tribunal de Etica</MenuItem>
                </MenuList>}
        </Menu>
        <FormHelperText>Organismo Seleccionado</FormHelperText> <FormLabel>Firmas</FormLabel>
        <FormLabel>Número:</FormLabel>
        <Input
            className="input"
            id="input1"
            placeholder="Ingrese el nuevo Número de Resolución"
            type='number'
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Año:</FormLabel>
        <Input
            className="input"
            id="input2"
            placeholder="Escriba Nombre completo"
            onKeyDown={(e) => nextFocus(e)}
            type='number'
            defaultValue={year}
        />
        <FormLabel>Fecha:</FormLabel>
        <Input
            className="input"
            id="input3"
            onKeyDown={(e) => nextFocus(e)}
            type='date'
        />
        <FormLabel>Título:</FormLabel>
        <Input
            className="input"
            id="input4"
            placeholder="Título"
            onKeyDown={(e) => nextFocus(e)}
            type={'text'}
        />
        <FormHelperText>Título o tema de la resolución.</FormHelperText>
        <FormLabel>Visto:</FormLabel>
        <Textarea
            className="input"
            id="input5"
            placeholder="Visto"
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Considerando:</FormLabel>
        <Textarea
            className="input"
            id="input6"
            placeholder="Considerando"
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Resuelve:</FormLabel>
        <Textarea
            className="input"
            id="input7"
            placeholder="Resuelve"
        />
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
                    defaultValue={setDefaultcheckboxValue()}
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
                    <Button colorScheme='blue' mr={3}>
                        Aceptar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        <FormHelperText>Firmantes Seleccionados
            {members ? members.map((s) => <Text>{signatures[s] ? s : null}</Text>) : null}
        </FormHelperText>
    </FormControl >
}