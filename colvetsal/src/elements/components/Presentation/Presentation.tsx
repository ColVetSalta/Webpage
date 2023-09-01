import React from 'react'
import p from './Presentation.module.css'
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import autoridades from '../../../Autoridedes.json'
import { type Role, Org } from '../../../types'
import { RoleData } from '../..'
import OrgDescription from '../OrgDescription/OrgDescription'

type Present = { motive: string | undefined; }
type Cons = { [key: string]: Role[]; }

const Presentation: React.FC<Present> = ({ motive }) => {

    const m_directiva: Org = autoridades.consejomayor.mdirectiva;
    const roles_dir = Object.keys(m_directiva);
    const t_etica: Org = autoridades.consejomayor.tribetica;
    const roles_etica = Object.keys(t_etica);
    const cons_zonas: Cons = autoridades.consejomayor.Consejeros;
    const zonas = Object.keys(cons_zonas);

    function ToMesaDirectiva() {
        return <OrgDescription
                        organism='Mesa Directiva'
                        staff={m_directiva}
                        roles={roles_dir}
                    />
    }
    function ToTribunalEtica() {
        return <OrgDescription
        organism='Tribunal de Ética'
        staff={t_etica}
        roles={roles_etica}
    />
    }


    function GridHandler() {
        if (motive === 'mdirectiva') {
            return ToMesaDirectiva()
        }
        if (motive === 'tribetica') {
            return ToTribunalEtica()
        }
        if (motive === 'consejomayor') {
            return <Grid>
                <GridItem>
                    {ToMesaDirectiva()}
                </GridItem>
                <GridItem>
                    {ToTribunalEtica()}
                </GridItem>
                <GridItem>
                    <Heading>Consejeros</Heading>
                    {
                        zonas ? zonas.map((r) => {
                            return <div>
                                <Heading>{r}</Heading>
                                {cons_zonas[r].map((z) => {
                                    return <RoleData
                                        title={null}
                                        name={z.nombre}
                                        tel={z.telefono}
                                        email={z.correoElectronico}
                                    />
                                })}
                            </div>
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