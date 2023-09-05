import { Card, Grid, Image, Heading, Text } from '@chakra-ui/react';
import novedades from '../../../Novedades.json'

export default function Novedades(): JSX.Element {
    return <Grid
        margin={'15dvh 5dvw 10dvh 5dvw'}
        templateColumns='repeat(3, 1fr)'
        gap={2}
        opacity={'93%'}
    >
        {novedades ?
            novedades.map((n) => {
                return <Card
                    background={'darkgray'}
                    key={n.title}>
                    <Image
                        boxSize={'2em'}
                        src={n.image} alt={n.alt} />
                    <Heading>{n.title}</Heading>
                    <Text>{n.summary}</Text>
                </Card>;
            }) :
            <h3>No se encontraron novedades</h3>}
    </Grid>;
}