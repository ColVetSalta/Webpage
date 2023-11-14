import { Router } from 'express'
import matriculaRouter from './matriculaRouter'
import organismoRouter from './organismoRouter'
import resolucionRouter from './resolucionRouter'
import novedadRouter from './novedadRouter'
// import PeriodoRouter from './periodoRouter'

const router = Router()

router.use('/matriculado', matriculaRouter)
router.use('/organismo', organismoRouter)
router.use('/resoluciones', resolucionRouter)
router.use('/novedades', novedadRouter)
// router.use('/periodo', PeriodoRouter)

export default router
