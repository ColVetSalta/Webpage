import React from 'react'
import i from './Institutional.module.css'
import { Grid } from '@chakra-ui/react'
import { Presentation } from '../..'
import { useParams } from 'react-router-dom'

export default function Institutional (): React.JSX.Element {
    const { motive } = useParams()
    return <Grid className={i.Cont}>
<h1>Institucional</h1>
<Presentation motive={motive}/>
    </Grid>
}