import app from './app.js'
import { connectDB } from './db.js'

// 1. Conexión a BD
connectDB()

// 2. Arrancar el servidor
const PORT = 3000
app.listen(PORT)

console.log(`Server on port ${PORT}`)