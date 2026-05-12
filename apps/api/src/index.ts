import { Hono } from 'hono'

const app = new Hono()

// 通電確認
const routes = app.basePath('/api').get('/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' })
})

export type AppType = typeof routes 
export default app