import p from './Presentation.module.css'
// import { Grid, GridItem, Heading } from '@chakra-ui/react'
import information from '../../../API.json'
import { type Inst, Role } from '../../../types'
import OrgDescription from './OrgDescription'

export default function Presentation({ motive }: { motive: string }): JSX.Element {

    const ind: string = motive.split('_')[0];
    const subind: string = motive.split('_')[1];
    const info: Inst = information[ind][subind];
    const divitions: string[] = Object.keys(info);

    function GridHandler(d) {
        console.log(d, 'parametro');
        const items = Object.keys(d);
        items.splice(items.indexOf('info'), 1);
        console.log(items, 'array de indices sin info');
        if (d.info.type && (d.info.type === 'grid')) {
            return <div>
                {items ? items.map((i) => {
                    const roles = Object.keys(d[i])
                    console.log(roles);
                    if (d[i].info.type && (d[i].info.type === 'card')) {
                        return <div key={i}>
                            <OrgDescription
                                organism={i}
                                staff={d[i]}
                                roles={roles} />
                        </div>
                    }
                    if (d[i].info.type && (d[i].info.type === 'list')) {  
                        roles.splice(roles.indexOf('info'), 1);
                        return <div key={i}>
                            <h3>{i}</h3>
                            {roles ? roles.map((r) => {
                                const arrstaff: Role[] = d[i][r];                              
                                return <div>
                                {arrstaff.map(()=>{
                                    return <OrgDescription
                                    organism={r}
                                    staff={Object(arrstaff)}
                                    roles={Object.keys(arrstaff)} />
                                })
                            }
                            </div>
                            }) :
                                null
                            }

                        </div>
                    }
                }) : null}
            </div>
        }
        if (d.info.type && (d.info.type === 'doc')) {
            return <div>
                {items ? items.map((i) => {
                    const roles = Object.keys(d[i])
                    console.log(roles);
                    return <div key={i}>
                        {roles ? roles.map((r) => {
                            <h1>{r}</h1>
                            if (r === "info") return null;
                            return <div>
                                <h4>{d[i][r].titulo}</h4>
                                <h5>{d[i][r].fecha}</h5>
                                <h6>Visto: {d[i][r].visto}</h6>
                                <h6>Considerando: {d[i][r].considerando}</h6>
                                {/* <p>Resuelve: {d[i][r].resuelve}</p> */}
                            </div>;
                        }) :
                            null}
                    </div>
                }) : null}
            </div>
        }
    }

    return <div className={p.cont}>
        {/* {GridHandler()} */}
        {
            divitions ? divitions.map((d) => {
                console.log('First Map', d);
                return <div>
                    <h3>{d}</h3>
                    {
                        GridHandler(info[d])
                    }
                </div>
            }) : null
        }
    </div>
}