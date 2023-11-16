import React from 'react'
import { type Role } from '../../../types'
import { Flex, Heading } from '@chakra-ui/react'

export default function RoleData({ r }: { r: Role | { pendiente: string } }): React.JSX.Element {
    if ('cargo' in r) {
        return <Flex
        flexDirection={'column'}>
            <Heading as='h4'>{r.cargo}</Heading>
            <Heading as='h5'>{r.nombre + ' ' + r.apellido}</Heading>
            <Heading as='h5'>M.P.: {r.mp}</Heading>
            {/* <h6>Telefono: {r.numero}</h6> */}
            {/* <h6>e-mail: {r.correo_electronico}</h6> */}
        </Flex>
    } else if ('pendiente' in r) {
        return <div>
            <h3>{r.pendiente}</h3>
        </div>
    }
    return <div></div>
}