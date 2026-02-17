import express, { NextFunction, Request, Response } from 'express'
import usersRouter from './routes/users.routes'
import databaseService from '~/services/database.services'
const app = express()
const port = 3001

app.use(express.json())

app.use('/user', usersRouter)

databaseService.connect()

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Error detail is:', err.message)
  res.status(400).json({ error: err.message })
})

app.listen(port, () => {
  console.log(`Twitter API is listening on port ${port}`)
})
