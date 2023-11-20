import { Grid, Container, } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { Matriculado } from '../../types';
import { getMats } from '../../redux/matSlice';
import { Loading } from './Loading';
import PresentCard from '../PresentCard';

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
    >
        {(matriculados && motive === 'ACTIVOS') ?
            matriculados[0].mp !== 0 ?
                matriculados.map((n) => {
                    return <PresentCard n={n} />
                }) : <Loading /> : <Container
                    gridColumn={2}>
                <h1>PROXIMAMENTE</h1>
                <h3>Estamos trabajando para presentar este espacio en un futuro</h3>
            </Container>
        }
    </Grid>;
}