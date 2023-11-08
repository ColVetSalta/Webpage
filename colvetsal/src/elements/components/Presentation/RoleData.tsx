import React from 'react'
import { type Role } from '../../../types'

export default function RoleData({ r }: { r: Role | { pendiente: string } }): React.JSX.Element {
    if ('cargo' in r) {
        return <div>
            <h4>{r.cargo}</h4>
            <h5>{r.nombre + ' ' + r.apellido}</h5>
            <h6>Telefono: {r.numero}</h6>
            <h6>e-mail: {r.correo_electronico}</h6>
        </div>
    } else if ('pendiente' in r) {
        return <div>
            <h3>{r.pendiente}</h3>
        </div>
    }
    return <div></div>
}