import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './src/config/db.js'
import cors from 'cors'
import userRouter from './src/api/routes/users.js'
import authRouter from './src/api/routes/auth.js'
import cloudinaryConfig from './src/config/cloudinary.js'

/* Necesito importar estas librerias para poder generar rutas relativas */
import path from 'path'
import { fileURLToPath } from 'url'
/* Necesito crear varias variables para poder implementar la funcionalida dde __dirname que en ES no funciona */
const __file = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__file)

const app = express()
const PORT = 3000

connectDB()
cloudinaryConfig()
/* configure to accept json structure */
app.use(express.json())
/* configure to access from different ip (front and back end) */
app.use(cors())
/* router a los distintos modelos */
/* auth (register login) */
app.use('/api/auth', authRouter)
/* users */
app.use('/api/users', userRouter)

//Use the client app (FrontEnd)
app.use(express.static(path.join(__dirname, '/FrontEnd/dist')))

// render client for any path
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/FrontEnd/dist/index.html'))
)
/* Not found Root */
app.use('*', (req, res, next) => {
  return res.status(404).json(`Route not found`)
})
/* listen port for backend */
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`)
})
