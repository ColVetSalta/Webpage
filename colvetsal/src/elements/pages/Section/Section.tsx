import i from './Section.module.css'
import { Grid, Heading } from '@chakra-ui/react'
import { Matriculados, Novedades, Presentation } from '../..'
import { useParams } from 'react-router-dom'

export default function Section (): JSX.Element {
    const { motive } = useParams()
    const ind = motive?.split('_')[0] as string;
    const subind = motive?.split('_')[1].toUpperCase() as string;
    return <Grid 
    className={i.Cont}
    margin={'15dvh 5dvw 10dvh 5dvw'}
    >
<Heading as='h1'>{ind[0].toUpperCase()+ind.slice(1)}</Heading>
<Heading as='h2'>{subind}</Heading>
{ind === 'institucional' && <Presentation motive={subind}/>}
{ind === 'novedades' && <Novedades motive={subind}/>}
{ind === 'matriculados' && <Matriculados motive={subind}/>}
    </Grid>
}