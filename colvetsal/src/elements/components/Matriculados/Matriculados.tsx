import m from './Matriculados.module.css';
import { Card, Grid, Heading, Text, Flex } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { Matriculado } from '../../../types';
import { Link as ChakLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getMats } from '../../../redux/matSlice';

export default function Matriculados({ motive }: { motive: string }): JSX.Element {
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (motive === 'ACTIVOS') {
            axios.get<Matriculado[]>('/matriculado?active=true')
                .then((data) => dispatch(getMats(data.data)))
        } 
        // else {
        //     axios.get<Matriculado[]>(`/matriculado?categoria=${motive}`)
        //         .then((data) => dispatch(getNews(data.data)))
        // }
    }), [motive]
    const { matriculados } = useAppSelector((state) => state.mat)

    return <Grid
        margin={'15dvh 5dvw 10dvh 5dvw'}
        templateColumns='repeat(3, 1fr)'
        gap={5}
        opacity={'93%'}
        className={m.Grid}
    >
        {matriculados ?
            matriculados.map((n) => {
                // const tel = n.telefono?.find((t)=>t.principal === true)
                return <Card
                    background={'darkgray'}
                    key={n.mp}>
                    <ChakLink
                        as={Link}
                        to={`/news/detail/${n.mp}`}
                    >
                        <Flex>
                            {/* <Image
                                boxSize={'7em'}
                                src={n.image || 'noticia.png'}
                                alt={n.alt} /> */}
                            <Heading as='h1'>Dr/a: {n.nombre} {n.apellido}</Heading>
                            <Heading as='h2'>M.P.: {n.mp}</Heading>
                        </Flex>
                        {/* <Text>Telefono :{tel?.numero}</Text> */}
                        <Text>Email :{n.correo_electronico}</Text>
                    </ChakLink>
                </Card>;
            }) :
            <h3>No se encontraron novedades</h3>}
    </Grid>;
}