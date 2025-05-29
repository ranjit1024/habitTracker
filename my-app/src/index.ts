import { Hono } from 'hono'
import { userrouter } from './routes'
import { cors } from 'hono/cors'
import { habitrouter } from './routes/habit'

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string 
  }
}>()
app.use("*", cors())
app.route('api/v1/user',userrouter)
app.route('/api/v1/habit',habitrouter)


export default app
