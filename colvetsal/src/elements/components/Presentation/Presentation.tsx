import p from './Presentation.module.css'
// import { Grid, GridItem, Heading } from '@chakra-ui/react'
import information from '../../../API.json'
import RoleData from './RoleData';

export default function Presentation({ motive }: { motive: string }): JSX.Element {
    // const ind: string = motive.split('_')[0];
    const subind: string = motive.split('_')[1].toUpperCase();
    // if (ind in information) {
    //     const uno = information[ind as keyof typeof information]
    //     if (subind in uno) {
    //         const info: Inst = uno[subind as keyof typeof uno] as Inst;
            const divitions: string[] = Object.keys(information);

            return <div className={p.cont}>
                {
                    divitions ? divitions.map((d) => {
                        console.log('First Map', d);
                        const h = information[d as keyof typeof information]
                        console.log(h, 'second');                        
                        return <div>
                        <h3>{subind}</h3>
                            <h3>{d}</h3>
                            {h ? h.map((r)=> <RoleData r={r} />) : null}                            
                        </div>
                    }) : null
                }
            </div>
    //     }else {
    //         return <div></div>
    //     }
    // } else {
    //     return <div></div>
    // }
}