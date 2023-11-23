import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Textarea
} from "@chakra-ui/react";
import { nextFocus } from "../../../utils/FormUtils";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { ChangeEvent, MouseEvent, useState } from "react";
import SignaturesModal from "./SignaturesModal";
import { ResolPost } from "../../../types";
import { useAppSelector } from "../../../redux/hooks";


export interface IPostResolutionForm {
    resolution: ResolPost
    setResolution: React.Dispatch<React.SetStateAction<ResolPost>>
}

export default function PostResolutionForm({ resolution, setResolution }: IPostResolutionForm): JSX.Element {
    const { organism } = useAppSelector((state) => state.org)
    const orgs = Object.keys(organism)
    console.log('Array de orgs: ', orgs)
    const [org, setOrg] = useState('Consejo Mayor')
    const [firma, setFirma] = useState([0])
    // set initial state form members Array to an Object
    // eslint-disable-next-line no-constant-condition
    const [members, setMembers] = useState<(string | number)[][] | null>(null)
    const [signatures, setSignatures] = useState<{ [key: string]: boolean } | null>(null)

    const year = new Date().getFullYear()
    // const firmas = organism.
    // })

    function HandleOrgSelect(e: MouseEvent<HTMLButtonElement>){
        setOrg(e.currentTarget.name)
    console.log('Nueva org Seleccionada: ', org)
    if(org === 'Consejo Mayor'){
        setMembers(orgs.map((o) => organism[o].map((role) => [o, role.cargo, role.nombre, role.apellido, role.periodo, role.mp])).flat())
     }else {
        setMembers(organism[org as keyof typeof organism].map((c) => [org, c.cargo, c.nombre, c.apellido, c.periodo, c.mp]))
            }
    console.log('Nuevo Array de members: ', members)
    const memberInitialSate = members ? members.reduce((o, key) => ({ ...o, [key[0]+' '+key[1]+' '+key[3]]: false }), {}) : null        
        setSignatures(memberInitialSate)
    console.log('Nuevo Objeto signatures(inicial): ', signatures)
    }

    function HandleChange(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setResolution({
                    ...resolution,
                    [e.target.name as keyof typeof resolution]: e.target.value,
                    firmas: firma
        })
    }

    return <FormControl
        padding={'1dvh 1dvw 1dvh 1dvw'}
        overflowY={'scroll'}
        overflowX={'auto'}
        maxHeight={'50dvh'}
        id="Form"
    >
        <FormLabel>Organismo:</FormLabel>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Seleccione un Organismo
            </MenuButton>
            <MenuList>
                <MenuItem
                    key={'Consejo Mayor'}
                    name="Consejo Mayor"
                    value={'Consejo Mayor'}
                    onClick={(e) =>  HandleOrgSelect(e)}
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
        <FormHelperText>Organismo Seleccionado</FormHelperText>
        <FormLabel>Número:</FormLabel>
        <Input
            className="input"
            id="input1"
            placeholder="Ingrese el nuevo Número de Resolución"
            onChange={HandleChange}
            type='number'
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Año:</FormLabel>
        <Input
            className="input"
            id="input2"
            placeholder="Escriba Nombre completo"
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
            type='number'
            defaultValue={year}
        />
        <FormLabel>Fecha:</FormLabel>
        <Input
            className="input"
            id="input3"
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
            type='date'
        />
        <FormLabel>Título:</FormLabel>
        <Input
            className="input"
            id="input4"
            placeholder="Título"
            onKeyDown={(e) => nextFocus(e)}
            onChange={HandleChange}
            type={'text'}
        />
        <FormHelperText>Título o tema de la resolución.</FormHelperText>
        <FormLabel>Visto:</FormLabel>
        <Textarea
            className="input"
            id="input5"
            onChange={HandleChange}
            placeholder="Visto"
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Considerando:</FormLabel>
        <Textarea
            className="input"
            id="input6"
            onChange={HandleChange}
            placeholder="Considerando"
            onKeyDown={(e) => nextFocus(e)}
        />
        <FormLabel>Resuelve:</FormLabel>
        <Textarea
            className="input"
            onChange={HandleChange}
            id="input7"
            placeholder="Resuelve"
        />
        <FormLabel>Firmas</FormLabel>
        {
        members ?
        <SignaturesModal
            members={members}
            signatures={signatures}
            setSignatures={setSignatures}
            firma={firma}
            setFirma={setFirma}
        /> :
        null
        }
        <FormHelperText>Firmantes Seleccionados
            {signatures ? Object.keys(signatures).map((s) => <Text>{signatures[s] ? s : null}</Text>) : null}
        </FormHelperText>
    </FormControl >
}