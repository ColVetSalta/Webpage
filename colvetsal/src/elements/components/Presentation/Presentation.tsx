import p from './Presentation.module.css'
// import { Grid, GridItem, Heading } from '@chakra-ui/react'
import RoleData from './RoleData';
import { useAppSelector } from '../../../redux/hooks'
import { Organismo } from '../../../types';

export interface DefPres {
    [x: string]: [{
        pendiente: string
    }
]}

export default function Presentation({ motive }: { motive: string }): JSX.Element {

    const subind: string = motive.split('_')[1].toUpperCase();
    const { organism } = useAppSelector((state) => state.org)
    let stateSelect: Organismo | DefPres = {'PROXIMAMENTE': [{
        pendiente: 'Estamos trabajando para presentar este espacio en un futuro'
    }]}

    if (subind === 'AUTORIDADES') stateSelect = organism

    const divitions: string[] = Object.keys(stateSelect);

    return <div className={p.cont}>
        <h3>{subind}</h3>
        <h3>Consejo Mayor: </h3>
        {
            divitions ? divitions.map((d) => {
                const h = stateSelect[d as keyof typeof stateSelect]
                return <div>
                    <h3>{d}</h3>
                    {h ? h.map((r) => <RoleData r={r} />) : null}
                </div>
            }) : null
        }
    </div>
}