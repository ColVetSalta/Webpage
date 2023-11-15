import p from './Presentation.module.css'
// import { Grid, GridItem, Heading } from '@chakra-ui/react'
import RoleData from './RoleData';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { Organismo, Resol } from '../../../types';
import axios from 'axios';
import React from 'react';
import { getOrganism } from '../../../redux/orgSlice';
import { getResoluciones } from '../../../redux/resSlice';
import { Link as ChakLink} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

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
        return <ul>
            {resoluciones?.map((r) =>{
                console.log(r.titulo)
                return <li 
            key={r.id}
            >
                <ChakLink
                as={Link}
                to={`/res/detail/${r.id}`}>
                 <h2>{r.num} / {r.year} - {r.titulo}</h2>
                </ChakLink>                
            </li>})}
            </ul>
    } else if (motive === 'AUTORIDADES') {
        stateSelect = organism
        const divitions: string[] = Object.keys(stateSelect);

        return <div className={p.cont}>
            <h3>{motive}</h3>
            <h3>Consejo Mayor: </h3>
            {
                divitions ? divitions.map((d) => {
                    const h = stateSelect[d as keyof typeof stateSelect]
                    return <div>
                        <h3>{d}</h3>
                        {h ? h.map((r) => <RoleData r={r} />) : null}
                    </div>
                }) : null
            }
        </div>
    } else {
        const divitions: string[] = Object.keys(stateSelect);
        return <div>
            {
                divitions ? divitions.map((d) => {
                    const h = stateSelect[d as keyof typeof stateSelect]
                    return <div>
                        <h3>{d}</h3>
                        {h ? h.map((r) => <RoleData r={r} />) : null}
                    </div>
                }) : null
            }
        </div>
    }
}