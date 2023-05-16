import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('/', () => {
  return 'Api TimeCapsule - NLW SapceTime'
})

app.get('/user', () => {
  return prisma.user.findMany()
})

const port = Number(process.env.PORT) || 3333
app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Server running in: http://localhost:${port}`)
  })
