import navList from "../../../Navegacion.json";
import {
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react";
import { Navigation } from "../../../types";
import FormModal from "../../components/FormModal/FormModal";

export default function Admin(): JSX.Element {
    const impList: Navigation[] = navList;
    return (
        <Grid
        templateColumns='repeat(3, 1fr)'
            marginBlockStart={'15dvh'}>
                {
                    impList ?
                        impList.map((list) => {
                            return <GridItem
                                key={list.indexTitle}
                                >
                                <Heading>{list.indexTitle}</Heading>
                                {list.subindex ?
                                    list.subindex.map((section) => {
                                        return <FormModal section={section}/>
                                    }) :
                                    <div></div>
                                }
                            </GridItem>
                        }) :
                        <div></div>
                        }

        </Grid>
    )
}