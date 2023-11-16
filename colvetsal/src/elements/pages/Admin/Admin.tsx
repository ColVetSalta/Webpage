import navList from "../../../Navegacion.json";
import { 
    Button,
    Container,
    Flex, Grid,
    GridItem,
    Heading, 
    Box,
    useDisclosure
} from "@chakra-ui/react";
import { Navigation } from "../../../types";
import FormModal from "../../components/FormModal/FormModal";

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
                        <FormModal isOpen={isOpen} onClose={onClose} section={section}/>
                      </Box>}) : null
                }
                        </GridItem >

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