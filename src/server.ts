import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)

app.get('/', () => {
  return 'Api TimeCapsule - NLW SapceTime'
})

const port = Number(process.env.PORT) || 3333
app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server running in: http://localhost:${port}`)
  })
