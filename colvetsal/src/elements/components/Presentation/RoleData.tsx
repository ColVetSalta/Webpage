import React from 'react'
import { DatosMinimos, Role } from '../../../types'
import { Box, Heading, Text } from '@chakra-ui/react'
import { Loading } from '../Loading'
import PresentCard from '../PresentCard'

export default function RoleData({ r }: { r: Role | { pendiente: string } }): React.JSX.Element {
    if ('cargo' in r) {
        if (r.mp === 0) return <Loading />
        const mat: DatosMinimos = {
            mp: r.mp,
            nombre: r.nombre,
            apellido: r.apellido
        }
        return <Box>
            {Number(r.cargo) ? <Text><b>Delegado: {r.cargo}</b></Text> : <Heading as='h6' size='xs'>{r.cargo[0].toUpperCase() + r.cargo.slice(1)}</Heading>}
            <PresentCard n={mat} />
        </Box>
    } else if ('pendiente' in r) {
        return <div>
            <h3>{r.pendiente}</h3>
        </div>
    }
    return <div></div>
}