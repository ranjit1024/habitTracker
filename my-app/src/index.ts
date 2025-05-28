import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const app = new Hono<{
  Bindings:{
    DATABASE_URL:string 
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/', async (c)=>{
  
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  
  const exitstingUser = await prisma.user.findFirst({
    where:{
      email:body.email
    }
  });

  if(exitstingUser){
    return c.text('user exits')
  }
  prisma.user.create({
    data:{
      firstname:body.firstname,
      lastname:body.lastname,
      email:body.email,
      password:body.password
    }
  })
  
  console.log(exitstingUser)

  return c.json(body.name)
})
export default app
