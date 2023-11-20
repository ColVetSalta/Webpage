import navList from "../../../Navegacion.json";
import {
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react";
import { Navigation } from "../../../types";
import FormModal from "../../components/FormModal";

export default function Admin(): JSX.Element {
    // const actionList = ['NOVEDADES', 'AUTORIDADES', 'RESOLUCIONES', 'MATRICULADOS', 'NORMATIVA', 'HISTORIA']
    const impList: Navigation[] = navList;
    return (
        <Grid
            templateColumns='repeat(3, 1fr)'
            marginBlockStart={'15dvh'}>
            {
                impList ?
                    impList.map((list) => {
                        if (list.indexTitle === 'NOVEDADES') return <GridItem> <FormModal section={
                            {
                                subindexTitle: list.indexTitle,
                                url: ''
                            }
                        } /></GridItem>
                        return <GridItem
                            key={list.indexTitle}
                        >
                            <Heading>{list.indexTitle}</Heading>
                            {list.subindex ?
                                list.subindex.map((section) => {
                                    return <div key={section.subindexTitle}><FormModal section={section} /></div>
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