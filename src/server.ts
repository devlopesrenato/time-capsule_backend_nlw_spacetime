import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import 'dotenv/config'
import fastify from 'fastify'
import { authRoutes } from './routes/auth'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'spacetime',
})
app.register(authRoutes)
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
