import { hc } from 'hono/client'
import type { AppType } from '../../../../apps/api/src/index' 

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://anzdrop-api.namiyama814.workers.dev'

export const client = hc<AppType>(API_URL)