import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Jwt } from "hono/utils/jwt";
import { cors } from "hono/cors";

export const habitrouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_PASSWORD: string
  };
}>();
habitrouter.use("*", cors())

habitrouter.post('/add', async (c)=>{
      const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
    const body = await c.req.json();
    if(body.token){
        const decode = await Jwt.verify(body.token, c.env.JWT_PASSWORD)
        if(decode){
            console.log(decode);
         
            
        }
    }
})