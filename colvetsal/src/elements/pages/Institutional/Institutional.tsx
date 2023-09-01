import React from 'react'
import i from './Institutional.module.css'
import { Grid } from '@chakra-ui/react'
import { Presentation } from '../..'


export default function Institutional (motive: string): React.JSX.Element {
    return <Grid className={i.Cont}>
<h1>Institucional</h1>
<Presentation motive={motive}/>
    </Grid>
}