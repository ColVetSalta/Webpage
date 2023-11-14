import React from 'react'
import { Resol } from '../../../types'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import axios from 'axios'
import { getCurrentRes } from '../../../redux/resSlice'
import { useParams } from 'react-router-dom'
import { Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'

export default function ResolutionDetail(): React.JSX.Element {
    const { id } = useParams()
    const dispatch = useAppDispatch()
    
    React.useEffect(() => {
        axios.get<Resol>(`/resoluciones/${id}`)
            .then((data) => {
                console.log(data)
                dispatch(getCurrentRes(data.data))
            })
    }),[id]
    
    const { currentRes } = useAppSelector((state) => state.res)
    const r: Resol | { pendiente: string } = currentRes.id !== 0 ? currentRes : { pendiente: 'Estamos trabajando para presentar este espacio en un futuro' }
    if ('pendiente' in r) {
    return <Flex
        margin={'15dvh 5dvw 10dvh 5dvw'}
    >
        <h3>{r.pendiente}</h3>
    </Flex>
    }
    return <Flex
        margin={'15dvh 5dvw 10dvh 5dvw'}
        display={'column'}
        justify={'space-evenly'}
        fontFamily={'times-new-roman'}
    >
            <h2>{r.num} / {r.year}</h2>
            <h1>{r.orgid}</h1>
            <h1>{r.titulo}</h1>
            <h3>{r.fecha}</h3>
            <Text align={'justify'}><h3>Visto: </h3><p dangerouslySetInnerHTML={{ __html: r.visto}}/></Text >
            <Text align={'justify'}><h3>Considerando: </h3><p dangerouslySetInnerHTML={{ __html: r.considerando}}/></Text>
            <Text align={'justify'}><h3>Resuelve: </h3><p dangerouslySetInnerHTML={{ __html: r.resuelve}}/></Text>
            <Flex
            justifyContent={'space-evenly'}>
                <h3>Firma: </h3>
                <UnorderedList
                width={'100 dvw'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    >{
                r.firmas?.map((f) => {
                    return <ListItem 
                    key={f.mp}
                    margin={'0 20dvw 0 10dvw'}>
                        <h4>{f.nombre} {f.apellido}</h4>
                        <h5>{f.cargo}</h5>
                    </ListItem>
                })
            }
            </UnorderedList>
            </Flex>
        </Flex>
}