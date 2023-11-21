import nov from './Novedades.module.css';
import { Card, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useEffect } from 'react';
import axios from 'axios';
import { News } from '../../../types';
import { getNews } from '../../../redux/newsSlice';
import { Link as ChakLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading';

export default function Novedades({ motive }: { motive: string }): JSX.Element {
    const dispatch = useAppDispatch()
    const { news } = useAppSelector((state) => state.news)

    useEffect(() => {
        if (motive === 'home') {
            axios.get<News[]>('/novedades?destacado=true')
                .then((data) => dispatch(getNews(data.data)))
        } else {
            axios.get<News[]>(`/novedades?categoria=${motive}`)
                .then((data) => dispatch(getNews(data.data)))
        }
    }, [dispatch, motive])
    if (news.length === 0) return <Heading 
    as='h4' 
    fontFamily={'garamond'}    
    marginBlockStart={'12dvh'}
    marginBlockEnd={'12dvh'}>No se encontraron novedades</Heading>

    if (news[0].id === 0) return <Flex margin={'30dvh 0 30dvh 0'} justifyContent={'center'} align={'center'}><Loading /></Flex>
    return <Grid
        className={nov.Grid}
        templateColumns='repeat(3, 1fr)'
        gap={35}
        opacity={'93%'}
    >
        {news.map((n) => {
            return <ChakLink
                as={Link}
                to={`/news/detail/${n.id}`}
                key={n.id}
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
        })}
    </Grid>;
}