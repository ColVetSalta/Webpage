import React from 'react'
import p from './Presentation.module.css'
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import autoridades from '../../../Autoridedes.json'
import { type Role } from '../../../types'
import { RoleData } from '../..'

type Present = { motive: string | undefined; }
type Org = { [key: string]: Role; }
type Cons = { [key: string]: Role[]; }

const Presentation: React.FC<Present> = ({ motive }) => {

    const m_directiva: Org = autoridades.consejomayor.MesaDirectiva;
    const roles_dir = Object.keys(m_directiva);
    const t_etica: Org = autoridades.consejomayor.TribunalDeEtica;
    const roles_etica = Object.keys(t_etica);


    const cons_zonas: Cons = autoridades.consejomayor.Consejeros;
    const zonas = Object.keys(cons_zonas);

    function GridHandler() {
        if (motive === 'consejomayor') {
            return <Grid>
                <GridItem>
                    <Heading>Mesa Directiva</Heading>
                    {
                        roles_dir ? roles_dir.map((r) => {
                            return <RoleData 
                                title = {r}
                                name={ m_directiva[r].nombre}
                                tel= {m_directiva[r].telefono}
                                email= {m_directiva[r].correoElectronico}
                            />
                        }) :
                            null
                    }
                </GridItem>
                <GridItem>
                    <Heading>Tribunal de Ética</Heading>
                    {
                        roles_etica ? roles_etica.map((r) => {
                            return  <RoleData 
                                title= {r}
                                name={t_etica[r].nombre}
                                tel={t_etica[r].telefono}
                                email={t_etica[r].correoElectronico}
                            />
                        }) :
                            null
                    }
                </GridItem>
                <GridItem>
                    <Heading>Consejeros</Heading>
                    {
                        zonas ? zonas.map((r) => {
                            return cons_zonas[r].map((z) => {
                                return  <RoleData
                                title={r}
                                name={z.nombre} 
                                tel={z.telefono}
                                email={z.correoElectronico}
                                />
                            })
                        }) :
                            null
                    }
                </GridItem>
            </Grid>
        }
    }

    return <div className={p.cont}>
        {GridHandler()}
    </div>
}

export default Presentation;