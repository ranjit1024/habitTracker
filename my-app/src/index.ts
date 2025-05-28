import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Jwt  } from 'hono/utils/jwt'
import { userrouter } from './routes'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string 
  }
}>()

app.route('api/v1/user',userrouter)


export default app
