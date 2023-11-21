import p from './Presentation.module.css'
// import { Grid, GridItem, Heading } from '@chakra-ui/react'
import RoleData from './RoleData';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { Organismo, Resol } from '../../../types';
import axios from 'axios';
import React from 'react';
import { getOrganism } from '../../../redux/orgSlice';
import { getResoluciones } from '../../../redux/resSlice';
import { Link as ChakLink, Flex, ListItem, UnorderedList, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading';
import NotAbaliable from '../NotAbaliable';

export interface DefPres {
    [x: string]: [{
        pendiente: string
    }
    ]
}

export default function Presentation({ motive }: { motive: string }): JSX.Element {
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (motive === 'AUTORIDADES')
            axios.get<Organismo>('/organismo?full=true')
                .then((data) => {
                    console.log(data)
                    dispatch(getOrganism(data.data))
                })
        if (motive === 'RESOLUCIONES') {
            axios.get<Resol[]>('/resoluciones')
                .then((data) => {
                    console.log(data)
                    dispatch(getResoluciones(data.data))
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [motive])

    const { organism } = useAppSelector((state) => state.org)
    const { resoluciones } = useAppSelector((state) => state.res)
    let stateSelect: Organismo | DefPres = {
        'PROXIMAMENTE': [{
            pendiente: 'Estamos trabajando para presentar este espacio en un futuro'
        }]
    }

    if (motive === 'RESOLUCIONES') {
        return <UnorderedList
            fontFamily={'garamond'}
        >
            {resoluciones.length > 0 ?
                resoluciones?.map((r) => {
                    console.log(r.titulo)
                    return <ListItem
                        key={r.id}
                    >
                        <ChakLink
                            as={Link}
                            to={`/res/detail/${r.id}`}>
                            <h2>{r.num} / {r.year} - {r.titulo}</h2>
                        </ChakLink>
                    </ListItem>
                }) :
                <Loading />}
        </UnorderedList>
    } else if (motive === 'AUTORIDADES') {
        stateSelect = organism
        const divitions: string[] = Object.keys(stateSelect);

        return <Flex
            className={p.cont}
            flexDirection={'column'}
        >
            <Heading as='h2'>Consejo Mayor: </Heading>
            {
                divitions.length > 0 ? divitions.map((d) => {
                    const h = stateSelect[d as keyof typeof stateSelect]
                    return <Flex
                        flexDirection={'column'}
                    >
                        <Heading as='h3'>{d}</Heading >
                        <Flex
                            flexDirection={'row'}
                            justifyContent={'space-evenly'}
                        >
                            {h.length > 0 ? h.map((r) => <RoleData r={r} />) : <Loading />}
                        </Flex>
                    </Flex>
                }) :  <Loading />
            }
        </Flex>
    } else {
        return <NotAbaliable />
    }
}