import { hc } from 'hono/client'
import type { AppType } from '../../../../apps/api/src/index' 

export const client = hc<AppType>('/')