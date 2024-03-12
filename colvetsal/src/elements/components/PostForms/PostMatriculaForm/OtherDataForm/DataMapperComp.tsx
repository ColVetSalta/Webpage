import { Tbody, Td, Tr } from "@chakra-ui/react"
import { IPostTelModalForm } from "../../../../../types"
import EditSelectData from "./EditSelectData"

export default function DataMapperComp(
    { registered, setRegistered, Validate }: IPostTelModalForm
): JSX.Element {
    return <Tbody>
        {(registered.otrodato === undefined || registered.otrodato[0].titulo === '') ?
            <Tr>
                <Td>Asunto</Td>
                <Td>Descrpción (opcional)</Td>
            </Tr> :
            registered.otrodato.map((od, i) => {
                return <EditSelectData
                od= {od}
                i= {i}
                registered= {registered}
                setRegistered= {setRegistered}
                Validate= {Validate} 
                />
            })
        }
    </Tbody>
}
//EditSelectData