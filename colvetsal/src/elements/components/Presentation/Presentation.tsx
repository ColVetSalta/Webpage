import p from './Presentation.module.css'
// import { Grid, GridItem, Heading } from '@chakra-ui/react'
import RoleData from './RoleData';
import { useAppSelector } from '../../../redux/hooks'
export default function Presentation({ motive }: { motive: string }): JSX.Element {
    const { organism } = useAppSelector((state)=>state.org)
    const subind: string = motive.split('_')[1].toUpperCase();
            const divitions: string[] = Object.keys(organism);

            return <div className={p.cont}>
                        <h3>{subind}</h3>
                {
                    divitions ? divitions.map((d) => {
                        const h = organism[d as keyof typeof organism]                  
                        return <div>
                            <h3>{d}</h3>
                            {h ? h.map((r)=> <RoleData r={r} />) : null}                            
                        </div>
                    }) : null
                }
            </div>
}