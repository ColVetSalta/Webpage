import i from './Institutional.module.css'
import { Grid } from '@chakra-ui/react'
import { Novedades, Presentation } from '../..'
import { useParams } from 'react-router-dom'

export default function Institutional (): JSX.Element {
    const { motive } = useParams()
    const ind = motive?.split('_')[0] as string;
    const subind = motive?.split('_')[1].toUpperCase() as string;
    return <Grid 
    className={i.Cont}
    margin={'15dvh 5dvw 10dvh 5dvw'}
    >
<h1>Institucional</h1>
{ind === 'institucional' && <Presentation motive={subind}/>}
{ind === 'novedades' && <Novedades motive={subind}/>}

    </Grid>
}