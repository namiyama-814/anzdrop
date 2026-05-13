import { Hono } from 'hono'
import { cors } from 'hono/cors' 

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' })
})

export default app