import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify,decode } from "hono/jwt";
import { cors } from "hono/cors";
import { tr } from "date-fns/locale";

export const habitrouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_PASSWORD: string;
  };
}>();

habitrouter.use("*", cors());

habitrouter.post("/add", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  
  if (body.token) {
    try{

      const token = await verify(body.token, c.env.JWT_PASSWORD);
      console.log(token);
      return c.json({ message: 'Token verified', token });
    }
    catch(e){
      console.log(e);
      return c.text('not valid')
    }
  }
  return c.text("not")
});
