import { Card, Grid, Image, Heading, Text } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { News } from '../../../types';
import { getNews } from '../../../redux/newsSlice';

export default function Novedades(): JSX.Element {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        axios.get<News[]>('/news')
        .then((data)=> dispatch(getNews(data.data)))
    }),[]
    const { news } = useAppSelector((state) => state.news)

    return <Grid
        margin={'15dvh 5dvw 10dvh 5dvw'}
        templateColumns='repeat(3, 1fr)'
        gap={2}
        opacity={'93%'}
    >
        {news ?
            news.map((n) => {
                return <Card
                    background={'darkgray'}
                    key={n.title}>
                    <Image
                        boxSize={'2em'}
                        src={n.image || 'noticia.png'} 
                        alt={n.alt} />
                    <Heading>{n.title}</Heading>
                    <Text>{n.summary}</Text>
                </Card>;
            }) :
            <h3>No se encontraron novedades</h3>}
    </Grid>;
}