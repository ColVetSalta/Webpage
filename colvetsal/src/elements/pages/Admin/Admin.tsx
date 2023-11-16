import navList from "../../../Navegacion.json";
import { 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Container,
    Flex, Grid,
    GridItem,
    Heading, 
    Box,
    useDisclosure} from "@chakra-ui/react";
import { Navigation } from "../../../types";

export default function Admin(): JSX.Element {
    const impList: Navigation[] = navList;
    const { isOpen, onOpen, onClose } = useDisclosure()

    return <Flex>
        <Grid>
            {
                impList ? 
                impList.map((list) => {
                    return <GridItem>
                        <Heading>{list.indexTitle}</Heading>
                        {list.subindex ? 
                list.subindex.map((section) => { 
                    return <Box>
                        <Button onClick={onOpen}>
                    {section.subindexTitle}
                        </Button>
                        
                        <Modal isOpen={isOpen} onClose={onClose}>
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
                      </Box>}) : null
                }
                        </GridItem>

                }) : 
                <Container
                gridColumn={2}>
                    <h1>PROXIMAMENTE</h1>
                <h3>Estamos trabajando para presentar este espacio en un futuro</h3>
                </Container>
            }
        </Grid>
    </Flex>
}