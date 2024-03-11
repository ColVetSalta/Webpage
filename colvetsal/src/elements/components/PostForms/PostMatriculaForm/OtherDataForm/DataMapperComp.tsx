import { Tbody, Td, Tr } from "@chakra-ui/react"
import { Matriculado } from "../../../../../types"

interface DataMapper {
    registered: Matriculado
}

export default function DataMapperComp(
    { registered }: DataMapper
): JSX.Element {
    return <Tbody>
        {(registered.otrodato === undefined || registered.otrodato[0].titulo === '') ?
            <Tr>
                <Td>Asunto</Td>
                <Td>Descrpción (opcional)</Td>
            </Tr> :
            registered.otrodato.map((od) => {
                return <Tr>
                    <Td>{od.titulo}</Td>
                    <Td>{od.descripcion}</Td>
                </Tr>
            })
        }
    </Tbody>
}
//EditSelectData