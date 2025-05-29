import { Hono } from 'hono'
import { userrouter } from './routes'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string 
  }
}>()

app.route('api/v1/user',userrouter)


export default app
