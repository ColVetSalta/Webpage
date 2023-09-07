import p from './Presentation.module.css'
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import information from '../../../API.json'
import { type Inst } from '../../../types'
import OrgDescription from '../OrgDescription/OrgDescription'

export default function Presentation({ motive }:{motive:string} ): JSX.Element {
   
    const ind: string = motive.split('_')[0];
   const subind: string = motive.split('_')[1];
   const info: Inst = information[ind][subind];
   const divitions: string[] = Object.keys(info);
//    console.log(info);
   

    // const m_directiva: Org = autoridades.consejomayor.mdirectiva
    // const roles_dir = Object.keys(m_directiva)
    // roles_dir.shift();
    // const t_etica: Org = autoridades.consejomayor.tribetica
    // const roles_etica = Object.keys(t_etica)
    // roles_dir.shift();
    // const cons_zonas: Cons = autoridades.consejomayor.consejeros
    // const zonas = Object.keys(cons_zonas)
    // roles_dir.shift();

    function ToOrg(org: string, st: Org, rol: string[]) {
        return <OrgDescription
            organism={org}
            staff={st}
            roles={rol} />
    }

    function GridHandler(d) {
        console.log(d);
        
        const items = Object.keys(d)
            return <Grid>
                {items ? items.map((i)=>{
        const roles = Object.keys(d[i])
                return <GridItem key={i}>
                    {ToOrg(i, d[i], roles)}
                </GridItem>
                }) : null}
            </Grid>
        
    }

    return <div className={p.cont}>
        {/* {GridHandler()} */}
        {
            divitions ? divitions.map((d)=>{
                return <div>{
                    GridHandler(info[d])
                }</div>
            }) : null
        }
    </div>
}