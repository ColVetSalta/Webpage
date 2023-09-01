import React from 'react'
import p from './Presentation.module.css'
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import autoridades from '../../../Autoridedes.json'
import { type Role } from '../../../types'

type Present = { motive: string | undefined; }
type Org = { [key: string]: Role; }
 
const Presentation: React.FC<Present> = ( {motive} ) => {
    
const m_directiva: Org = autoridades.consejomayor.MesaDirectiva;
const roles_dir = Object.keys(m_directiva);
const t_etica = autoridades.consejomayor.TribunalDeEtica;
const roles_etica = Object.keys(t_etica);


const cons_zonas = autoridades.consejomayor.Consejeros;
const zonas = Object.keys(cons_zonas);

    function GridHandler() {
        if(motive === 'consejomayor'){
        return <GridItem>
            <Heading>Mesa Directiva</Heading>
            {
                roles_dir ? roles_dir.map((r)=>{
                    return <div>
                        <h4>{r}</h4>
                        <h5>{m_directiva[r].nombre}</h5>
                        <h6>Telefono: {m_directiva[r].telefono}</h6>
                        <h6>e-mail: {m_directiva[r].correoElectronico}</h6>
                    </div>
                }) : 
                null
            }
        </GridItem>}
    }

    return <Grid className={p.cont}>
        {GridHandler()}
    </Grid>
}

export default Presentation;