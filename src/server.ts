import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import 'dotenv/config'
import fastify from 'fastify'
import { resolve } from 'node:path'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'
import { uploadRoutes } from './routes/upload'

const app = fastify()

app.register(multipart)
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'spacetime',
})
app.register(authRoutes)
app.register(uploadRoutes)
app.register(memoriesRoutes)

app.get('/', () => {
  return 'Api TimeCapsule - NLW SapceTime'
})

const port = Number(process.env.PORT) || 3333
app
  .listen({
    port,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`Server running in: http://localhost:${port}`)
  })
