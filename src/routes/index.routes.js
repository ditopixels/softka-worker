import {Router} from 'express'
import {
    renderHome,
    renderDocs,
} from '../controllers/index.controller.js'

const router = Router()

router.get('/', (req,res)=>{
    res.json({
        hola:"buenas"
    })
})
router.get('/docs', renderDocs)

export default router