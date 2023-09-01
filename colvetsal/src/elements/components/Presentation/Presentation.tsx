import React from 'react'
import p from './Presentation.module.css'
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import autoridades from '../../../Autoridedes.json'
import { type Role } from '../../../types'

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
                            return <div>
                                <h4>{r}</h4>
                                <h5>{m_directiva[r].nombre}</h5>
                                <h6>Telefono: {m_directiva[r].telefono}</h6>
                                <h6>e-mail: {m_directiva[r].correoElectronico}</h6>
                            </div>
                        }) :
                            null
                    }
                </GridItem>
                <GridItem>
                    <Heading>Tribunal de Ética</Heading>
                    {
                        roles_etica ? roles_etica.map((r) => {
                            return <div>
                                <h4>{r}</h4>
                                <h5>{t_etica[r].nombre}</h5>
                                <h6>Telefono: {t_etica[r].telefono}</h6>
                                <h6>e-mail: {t_etica[r].correoElectronico}</h6>
                            </div>
                        }) :
                            null
                    }
                </GridItem>
                <GridItem>
                    <Heading>Consejeros</Heading>
                    {
                        zonas ? zonas.map((r) => {
                            return cons_zonas[r].map((z) => {
                                return <div>
                                    <h4>{r}</h4>
                                    <h5>{z.nombre}</h5>
                                    <h6>Telefono: {z.telefono}</h6>
                                    <h6>e-mail: {z.correoElectronico}</h6>
                                </div>
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