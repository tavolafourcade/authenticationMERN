import { Router } from 'express'
import { register, login } from '../controllers/auth.controller.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)

// Añadiendo las rutas a la aplicacion de Express
export default router