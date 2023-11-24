import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { MouseEvent, useState } from "react"
import { useAppSelector } from "../../../redux/hooks"
import { ResolPost } from "../../../types"
import PostResolutionForm from "./PostResolutionForm"

export interface IResolutionForm {
    resolution: ResolPost
    setResolution: React.Dispatch<React.SetStateAction<ResolPost>>
}

export default function MenuOrganism({ resolution, setResolution }: IResolutionForm): JSX.Element {
    const { organism } = useAppSelector((state) => state.org)
    const orgs = Object.keys(organism)
    const [selected, setSelected] = useState<boolean>(false)
    let org = 'Consejo Mayor'
    const [members, setMembers] = useState<(string | number)[][]>([['']])
    let signatures: { [key: string]: boolean } | null = null

    function HandleOrgSelect(e: MouseEvent<HTMLButtonElement>) {
        org = e.currentTarget.name
        if (org === 'Consejo Mayor') {
            setMembers(orgs.map((o) => organism[o].map((role) => [o, role.cargo, role.nombre, role.apellido, role.periodo, role.mp])).flat())
        } else {
            setMembers(organism[org as keyof typeof organism].map((c) => [org, c.cargo, c.nombre, c.apellido, c.periodo, c.mp]))
        }
        console.log('Nuevo Array de members: ', members)
        signatures = members ? members.reduce((o, key) => ({ ...o, [key[0] + ' ' + key[1] + ' ' + key[3]]: false }), {}) : null
        console.log('Nuevo Objeto signatures(inicial): ', signatures)
        setResolution({
            ...resolution,
            orgid: org
        })
        setSelected(true)
    }

    return <>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Seleccione un Organismo
            </MenuButton>
            <MenuList>
                <MenuItem
                    key={'Consejo Mayor'}
                    name="Consejo Mayor"
                    value={'Consejo Mayor'}
                    onClick={(e) => HandleOrgSelect(e)}
                >Consejo Mayor</MenuItem>
                {
                    orgs ? orgs.map((o) => {
                        return <MenuItem
                            key={o}
                            name={o}
                            value={o}
                            onClick={(e) => HandleOrgSelect(e)}
                        >{o}</MenuItem>
                    }) : null
                }
            </MenuList>
        </Menu>
        {selected ?
            <PostResolutionForm
                resolution={resolution}
                setResolution={setResolution}
                members={members}
                signatures={signatures}
            /> :
            null}
    </>
}