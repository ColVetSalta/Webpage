import { Router } from 'express'
import matriculaRouter from './matriculaRouter'
import organismoRouter from './organismoRouter'
import resolucionRouter from './resolucionRouter'

const router = Router()

router.use('/matriculado', matriculaRouter)
router.use('/organismo', organismoRouter)
router.use('/resoluciones', resolucionRouter)

export default router
