import {
    Grid,
    GridItem,
} from "@chakra-ui/react";
import FormModal from "../../components/FormModal";
import { Loading } from "../../components/Loading";

export default function Admin(): JSX.Element {
    const actionList = ['NOVEDADES', 'AUTORIDADES', 'RESOLUCIONES', 'MATRICULADOS', 'NORMATIVA', 'HISTORIA']

    return (
        <Grid
        minHeight={'55dvh'}
            templateColumns='repeat(3, 1fr)'
            marginBlockStart={'15dvh'}>
            {
                actionList ?
                    actionList.map((item) => {
                        return <GridItem
                            key={item}
                        >
                            <FormModal section={item} />
                        </GridItem>
                    }) :
                    <Loading/>
            }

        </Grid>
    )
}