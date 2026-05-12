import { Hono } from 'hono'

const app = new Hono()
  .get('/hello', (c:any) => {
    return c.json({ message: 'Hello AnzdropAPI!' });
  })

export type AppType = typeof app
export default app