import express from 'express'
import { authUser } from '../controllers/user.js'

  
const userRoutes = express.Router()

userRoutes.patch('/auth', authUser)

export default userRoutes