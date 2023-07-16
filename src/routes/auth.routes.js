import { Router } from 'express'
import { register, login, logout} from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)


// Añadiendo las rutas a la aplicacion de Express
export default router