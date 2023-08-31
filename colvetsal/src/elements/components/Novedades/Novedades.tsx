import { Card, Grid, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import novedades from '../../../Novedades.json'

const Novedades: React.FC = () => {
    return <Grid
    margin={'25dvh'}
        templateColumns='repeat(3, 1fr)'
        gap={2}
        opacity={'93%'}
    >
        {
            novedades ?
                novedades.map((n) => {
                    return <Card 
                    background={'darkgray'}
                    key={n.title}>
                        <Image 
                        boxSize={'2em'}
                        src={n.image} alt={n.alt} />
                        <Heading>{n.title}</Heading>
                        <Text>{n.summary}</Text>
                    </Card>
                }) :
                <h3>No se encontraron novedades</h3>
        }
    </Grid>
};
export default Novedades;