import { Tbody, Td, Tr } from "@chakra-ui/react"
import { IPostTelModalForm, Matriculado } from "../../../../types"
import EditSelectTel from "./EditSelectTel"

export default function TelMapperComp(
    { registered, setRegistered, Validate }: IPostTelModalForm
): JSX.Element {
    return <Tbody>
        {(registered.telefono !== undefined && registered.telefono[0].numero === '') ?
            <Tr>
                <Td>Número</Td>
                <Td>Desctrpción (opcional)</Td>
                <Td>Whatsapp</Td>
            </Tr> :
            registered.telefono?.map((t, i) => {
                return <EditSelectTel
                i={i}
                    t={t}
                    registered={registered}
                    setRegistered={setRegistered}
                    Validate={Validate as (input: Matriculado) => void}
                />
            })
        }
        </Tbody>
}