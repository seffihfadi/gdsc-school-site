import cors from 'cors'
import express from 'express'
import * as dotenv from 'dotenv'
import userRoutes from './routes/user.js'
import path from 'path'


// init
dotenv.config()
const app = express()
const port = process.env.PORT || 5000

// deploy
const __direnameone = path.resolve()
if (process.env.NODE_ENV === 'production') {
  console.log('__direnameone', __direnameone)
  app.use(express.static(path.join(__direnameone, 'frontend', 'dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__direnameone, 'frontend', 'dist', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API Running ...')
  })
}

// middlewares
app.use(cors({origin: 'https://gdsc-school.netlify.app'}))
app.use(express.json({limit: '1mb'}))


// middelwares
app.use('/api/user', userRoutes)



app.listen(port, () => {
  console.log('server runing on port ' + port)
})
  