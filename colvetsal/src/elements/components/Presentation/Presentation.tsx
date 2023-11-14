import p from './Presentation.module.css'
// import { Grid, GridItem, Heading } from '@chakra-ui/react'
import RoleData from './RoleData';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { Organismo, Resol } from '../../../types';
import axios from 'axios';
import React from 'react';
import { getOrganism } from '../../../redux/orgSlice';
import { getResoluciones } from '../../../redux/resSlice';

export interface DefPres {
    [x: string]: [{
        pendiente: string
    }
    ]
}

export default function Presentation({ motive }: { motive: string }): JSX.Element {
    const subind: string = motive.split('_')[1].toUpperCase();
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (subind === 'AUTORIDADES')
            axios.get<Organismo>('/organismo?full=true')
                .then((data) => {
                    console.log(data)
                    dispatch(getOrganism(data.data))
                })
        if (subind === 'RESOLUCIONES') {
            axios.get<Resol[]>('/resoluciones')
                .then((data) => {
                    console.log(data)
                    dispatch(getResoluciones(data.data))
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subind])

    const { organism } = useAppSelector((state) => state.org)
    const { resoluciones } = useAppSelector((state) => state.res)
    let stateSelect: Organismo | DefPres = {
        'PROXIMAMENTE': [{
            pendiente: 'Estamos trabajando para presentar este espacio en un futuro'
        }]
    }

    if (subind === 'RESOLUCIONES') {
        return <div>
            { resoluciones?.map((r) => <div>
            <h2>{r.num} / {r.year}</h2>
            <h1>{r.orgid}</h1>
            <h3>{r.fecha}</h3>
            <span><h3>Visto: </h3><p>{r.visto}</p></span>
            <span><h3>Considerando: </h3><p>{r.considerando}</p></span>
            <span><h3>Resuelve: </h3><p>{r.resuelve}</p></span>
            <span>
                <h3>Firma: </h3>
                <ul>{
                r.firmas?.map((f) => {
                    return <li key={f.mp}>
                        <h4>{f.nombre} {f.apellido}</h4>
                        <h5>{f.cargo}</h5>
                    </li>
                })
            }
            </ul>
            </span>
        </div>)}</div>
    } else if (subind === 'AUTORIDADES') {
        stateSelect = organism
        const divitions: string[] = Object.keys(stateSelect);

        return <div className={p.cont}>
            <h3>{subind}</h3>
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