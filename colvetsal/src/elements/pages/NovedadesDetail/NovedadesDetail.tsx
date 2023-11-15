import React from 'react'
import { News } from '../../../types'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import axios from 'axios'
import { getCurrentNew } from '../../../redux/newsSlice'
import { useParams } from 'react-router-dom'
import { Flex, Image, Text } from '@chakra-ui/react'

export default function NovedadesDetail(): React.JSX.Element {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    
    React.useEffect(() => {
        axios.get<News>(`/novedades/${id}`)
            .then((data) => {
                console.log(data)
                dispatch(getCurrentNew(data.data))
            })
    }),[id]
    
    const { currentNew } = useAppSelector((state) => state.news)
    const n: News | { pendiente: string } = currentNew.id !== 0 ? currentNew : { pendiente: 'Estamos trabajando para presentar este espacio en un futuro' }
    if ('pendiente' in n) {
    return <Flex
        margin={'15dvh 5dvw 10dvh 5dvw'}
    >
        <h3>{n.pendiente}</h3>
    </Flex>
    }
    return <Flex
        margin={'15dvh 5dvw 10dvh 5dvw'}
        display={'column'}
        justify={'space-evenly'}
        // fontFamily={'times-new-roman'}
    >
            <h2>{n.categoria}</h2>
            <h1>{n.title}</h1>
            <h3>{n.date}</h3>
            {n.fulltext ? <Text align={'justify'}><p dangerouslySetInnerHTML={{ __html: n.fulltext}}/></Text > : null}
            {n.image ? <Image src={n.image} alt={n.alt}/> : null}
        </Flex>
}