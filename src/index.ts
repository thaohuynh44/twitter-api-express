import express from 'express'
import usersRouter from './routes/users.routes'
import databaseService from '~/services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'

databaseService.connect()

const app = express()
const port = 3001

app.use(express.json())

app.use('/user', usersRouter)

app.use(defaultErrorHandler)

app.listen(port, () => {
  console.log(`Twitter API is listening on port ${port}`)
})
