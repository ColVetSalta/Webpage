import React from 'react'
import { type RData } from '../../../types'

export default function RoleData ({ title, name, tel, email }: RData): React.JSX.Element {
    return <div>
            <h4>{title}</h4>
            <h5>{name}</h5>
            <h6>Telefono: {tel}</h6>
            <h6>e-mail: {email}</h6>
        </div>
}