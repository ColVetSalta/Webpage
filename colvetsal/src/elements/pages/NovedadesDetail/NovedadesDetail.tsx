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
    return <Flex
        margin={'15dvh 5dvw 10dvh 5dvw'}
        display={'column'}
        justify={'space-evenly'}
        // fontFamily={'times-new-roman'}
    >
            <h2>{currentNew?.categoria}</h2>
            <h1>{currentNew?.title}</h1>
            <h3>{currentNew?.date}</h3>
            {currentNew?.fulltext ? <Text align={'justify'}><p dangerouslySetInnerHTML={{ __html: currentNew?.fulltext}}/></Text > : null}
            {currentNew?.image ? <Image src={currentNew?.image} alt={currentNew?.alt}/> : null}
        </Flex>
}