import { type Role, ConsMy, ResolOrg } from '../../../types'
import OrgDescription from './OrgDescription'

export default function Mapper({ h }: ConsMy | ResolOrg ) {
    console.log(h, 'parametro');
    const items = Object.keys(h);
    items.splice(items.indexOf('info'), 1);
    console.log(items, 'array de indices sin info');
    if (h.info.type && (h.info.type === 'grid')) {
        return <div>
            {items ? items.map((i) => {
                const roles = Object.keys(h[i])
                console.log(roles);
                if (h[i].info.type && (h[i].info.type === 'card')) {
                    return <div key={i}>
                        <OrgDescription
                            organism={i}
                            staff={h[i]}
                            roles={roles} />
                    </div>
                }
                if (h[i].info.type && (h[i].info.type === 'list')) {  
                    roles.splice(roles.indexOf('info'), 1);
                    return <div key={i}>
                        <h3>{i}</h3>
                        {roles ? roles.map((r) => {
                            const arrstaff: Role[] = h[i][r];                              
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
    if (h.info.type && (h.info.type === 'doc')) {
        return <div>
            {items ? items.map((i) => {
                const roles = Object.keys(h[i])
                console.log(roles);
                return <div key={i}>
                    {roles ? roles.map((r) => {
                        <h1>{r}</h1>
                        if (r === "info") return null;
                        return <div>
                            <h4>{h[i][r].titulo}</h4>
                            <h5>{h[i][r].fecha}</h5>
                            <h6>Visto: {h[i][r].visto}</h6>
                            <h6>Considerando: {h[i][r].considerando}</h6>
                            {/* <p>Resuelve: {d[i][r].resuelve}</p> */}
                        </div>;
                    }) :
                        null}
                </div>
            }) : null}
        </div>
    }
}