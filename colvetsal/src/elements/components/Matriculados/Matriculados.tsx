import m from './Matriculados.module.css';
import { Card, Grid, Heading, Flex, Container } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { Matriculado } from '../../../types';
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
        fontFamily={'garamond'}
    >
        {(matriculados && motive === 'ACTIVOS') ?
            matriculados.map((n) => {
                return <Card
                    background={'darkgray'}
                    key={n.mp}>
                        <Flex
                        display={'column'}
                        >
                            <Heading as='h3'>Dr/a: {n.nombre} {n.apellido}</Heading>
                            <Heading as='h4'>M.P.: {n.mp}</Heading>
                        </Flex>
                </Card>;
            }) : <Container
            gridColumn={2}>
                <h1>PROXIMAMENTE</h1>
            <h3>Estamos trabajando para presentar este espacio en un futuro</h3>
            </Container>
            }
    </Grid>;
}