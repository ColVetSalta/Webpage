import React from 'react'
import p from './Presentation.module.css'
import { Grid } from '@chakra-ui/react'

export default function Presentation (): React.JSX.Element {

    return <Grid className={p.cont}>
        <h2>Presentation</h2>
    </Grid>
}