import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify, decode } from "hono/jwt";
import { cors } from "hono/cors";
import { id, tr } from "date-fns/locale";

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

  const body : {
    token:string,
    habit:string,
    createdate:Date,
    startdate:Date,
    enddate:Date
  }  = await c.req.json();

  if (body.token) {
    try {
      const token = await verify(body.token, c.env.JWT_PASSWORD);
      console.log(token);
      console.log(body.createdate)
      console.log(body.startdate)
      console.log(body.enddate)
      if(token){
       const create = await prisma.habits.create({
        data:{
          userid:Number(token.id),
          currethabit:body.habit,
          created:body.createdate,
          start:body.startdate,
          end:body.enddate,
          
        }
       });
       console.log(create)

      }


      return c.json({ message: "Token verified", token });
    } catch (e) {
      console.log(e);
      return c.text("not valid");
    }
  }
  return c.text("not");
});

habitrouter.get("/", async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL}).$extends(withAccelerate());

    const token  =  c.req.query("token");
    console.log(token)

  
  if(token){
    const verifyToken = await verify(token, c.env.JWT_PASSWORD);
    try{
      const currethabit = await prisma.habits.findFirst({
        where:{
          userid:Number(verifyToken.id),
        },
        orderBy:{
          id:'desc'
        }
      })
      return c.json({
        cHabit:String(currethabit?.currethabit)})
    }
    catch(e){
      console.log("something went wrong")
      console.log(e);
    }
  }
  else{
    return c.text("unautnicate")
  }
  return c.text('workiing')
})