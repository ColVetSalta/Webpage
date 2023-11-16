import nov from './Novedades.module.css';
import { Card, Grid, Heading, Text } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { News } from '../../../types';
import { getNews } from '../../../redux/newsSlice';
import { Link as ChakLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Novedades({ motive }: { motive: string }): JSX.Element {
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (motive === 'home') {
            axios.get<News[]>('/novedades?destacado=true')
                .then((data) => dispatch(getNews(data.data)))
        } else {
            axios.get<News[]>(`/novedades?categoria=${motive}`)
                .then((data) => dispatch(getNews(data.data)))
        }
    }), [motive]
    const { news } = useAppSelector((state) => state.news)

    return <Grid
        className={nov.Grid}
        templateColumns='repeat(3, 1fr)'
        gap={35}
        opacity={'93%'}
    >
        {news ?
            news.map((n) => {
                return <ChakLink
                        as={Link}
                        to={`/news/detail/${n.id}`}
                    >
                        <Card
                    background={'darkgray'}
                    key={n.id}>
                    
                            {/* <Image
                                boxSize={'7em'}
                                src={n.image || 'noticia.png'}
                                alt={n.alt} /> */}
                            <Heading>{n.title}</Heading>
                        <Text>{n.summary}</Text>
                </Card>
                    </ChakLink>;
            }) :
            <h3>No se encontraron novedades</h3>}
    </Grid>;
}