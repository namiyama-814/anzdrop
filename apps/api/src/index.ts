import { Hono } from 'hono'
import { cors } from 'hono/cors' 

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

// ★ ここ！app.get の結果を route に代入する
const route = app.get('/api/hello', (c) => {
  return c.json({ message: 'Hello from Hono!' })
})

// これで typeof route が正しく機能します
export type AppType = typeof route
export default app