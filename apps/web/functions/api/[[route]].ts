/// <reference types="@cloudflare/workers-types" />
import { Hono } from 'hono'
import { handle } from 'hono/cloudflare-pages'

type Bindings = {
  API_SERVICE: Fetcher
}

const app = new Hono<{ Bindings: Bindings }>()

app.all('*', async (c) => {
  return await c.env.API_SERVICE.fetch(c.req.raw)
})

export const onRequest = handle(app)