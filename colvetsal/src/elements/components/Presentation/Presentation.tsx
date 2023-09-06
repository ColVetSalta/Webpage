import p from './Presentation.module.css'
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import autoridades from '../../../Autoridedes.json'
import { type Org, Present, Cons } from '../../../types'
import OrgDescription from '../OrgDescription/OrgDescription'

export default function Presentation({ motive }: Present): JSX.Element {

    const m_directiva: Org = autoridades.consejomayor.mdirectiva
    const roles_dir = Object.keys(m_directiva)
    // roles_dir.shift();
    const t_etica: Org = autoridades.consejomayor.tribetica
    const roles_etica = Object.keys(t_etica)
    // roles_dir.shift();
    const cons_zonas: Cons = autoridades.consejomayor.consejeros
    const zonas = Object.keys(cons_zonas)
    // roles_dir.shift();

    function ToOrg(org: string, st: Org, rol: string[]) {
        return <OrgDescription
            organism={org}
            staff={st}
            roles={rol} />
    }

    function GridHandler() {
        if (motive === 'mdirectiva') {
            return ToOrg(roles_dir[0], m_directiva, roles_dir)
        }
        if (motive === 'tribetica') {
            return ToOrg('Tribunal de Ética', t_etica, roles_etica)
        }
        if (motive === 'consejomayor') {
            return <Grid>
                <GridItem>
                    {ToOrg(roles_dir[0], m_directiva, roles_dir)}
                </GridItem>
                <GridItem>
                    {ToOrg('Tribunal de Ética', t_etica, roles_etica)}
                </GridItem>
                <GridItem>
                    {cons_zonas.info ? <Heading>{cons_zonas.info.title}</Heading> : null}
                    {zonas ? zonas.map((r) => {
                        if (r === "info") return null;
                        return ToOrg(r, Object(cons_zonas[r]), Object.keys(cons_zonas[r]))
                    }) :
                        null}
                </GridItem>
            </Grid>
        }
    }

    return <div className={p.cont}>
        {GridHandler()}
    </div>
}