import { Card, Container, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import novedades from '../../../Novedades.json'


const Novedades: React.FC = () => {
    return <Container>
        {
            novedades ?
                novedades.map((n) => {
                    return <Card key={n.title}>
                        <Image boxSize={'2em'} src={n.image} alt={n.alt} />
                        <Heading>{n.title}</Heading>
                        <Text>{n.summary}</Text>
                    </Card>
                }) :
                <h3>No se encontraron novedades</h3>
        }
    </Container>
};
export default Novedades;