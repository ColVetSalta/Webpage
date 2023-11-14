import React from 'react'
import { Resol } from '../../../types'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import axios from 'axios'
import { getCurrentRes } from '../../../redux/resSlice'
import { useParams } from 'react-router-dom'

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
    return <div>
        <h3>{r.pendiente}</h3>
    </div>
    }
    return <div>
            <h2>{r.num} / {r.year}</h2>
            <h1>{r.orgid}</h1>
            <h1>{r.titulo}</h1>
            <h3>{r.fecha}</h3>
            <span><h3>Visto: </h3><p dangerouslySetInnerHTML={{ __html: r.visto}}/></span>
            <span><h3>Considerando: </h3><p dangerouslySetInnerHTML={{ __html: r.considerando}}/></span>
            <span><h3>Resuelve: </h3><p dangerouslySetInnerHTML={{ __html: r.resuelve}}/></span>
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
        </div>
}