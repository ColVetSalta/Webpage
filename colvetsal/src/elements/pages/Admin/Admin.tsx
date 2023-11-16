import navList from "../../../Navegacion.json";
import {
    Button,
    Flex,
    Heading,
    ListItem,
    UnorderedList,
    useDisclosure
} from "@chakra-ui/react";
import { Navigation } from "../../../types";
import FormModal from "../../components/FormModal/FormModal";

export default function Admin(): JSX.Element {
    const impList: Navigation[] = navList;
    return (
        <Flex
            marginBlockStart={'15dvh'}>
            <UnorderedList>
                {
                    impList ?
                        impList.map((list) => {
                            return <ListItem
                                key={list.indexTitle}>
                                <Heading>{list.indexTitle}</Heading>
                                {list.subindex ?
                                    list.subindex.map((section) => {
                                        return <FormModal section={section}/>
                                    }) :
                                    <div></div>
                                }
                            </ListItem>
                        }) :
                        <div></div>
                        }
                            
            </UnorderedList>

        </Flex>
    )
}