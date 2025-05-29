import { Hono } from 'hono'
import { userrouter } from './routes'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string 
  }
}>()

app.route('api/v1/user',userrouter)


export default app
