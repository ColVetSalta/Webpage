import React from 'react'
import p from './Presentation.module.css'
import { Grid } from '@chakra-ui/react'
import autoridades from '../../../Autoridedes.json'
import { type Role } from '../../../types'

type Org = {
    [key: string]: Role
}
const Presentation: React.FC = ( motive: string) => {
const cons_zonas = autoridades.ConsejoMayor.Consejeros;
const zonas = Object.keys(cons_zonas);
const m_directiva: Org = autoridades.ConsejoMayor.MesaDirectiva;
const roles_dir = Object.keys(m_directiva);
const t_etica = autoridades.ConsejoMayor.TribunalDeEtica;
const roles_etica = Object.keys(t_etica);


    function GridHandler() {
        if(motive === 'mesa')
        return <div>

        </div>
    }

    return <Grid className={p.cont}>
        {GridHandler()}
    </Grid>
}

export default Presentation;