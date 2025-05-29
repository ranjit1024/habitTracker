import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Jwt } from "hono/utils/jwt";
import bcrypt from "bcryptjs";
import { cors } from "hono/cors";


export const userrouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_PASSWORD: string
  };
}>();
userrouter.use("*", cors())

userrouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const password = await bcrypt.hash(body.password, 10);

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const exitstingUser = await prisma.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (exitstingUser !== null) {
    console.log(exitstingUser);
    return c.text("user exits");
  } else {
    const createuser = await prisma.user.create({
      data: {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        password: password,
      },

    });
    const token = await Jwt.sign({
      id: createuser.id,
      email: createuser.email
    }, c.env.JWT_PASSWORD);


    return c.json(token);
  }
});

userrouter.post('/signin', async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try {
    const exitstingUser = await prisma.user.findFirst({
      where: {
        email: body.email
      }
    })
    if (exitstingUser) {
      const compare = await bcrypt.compare(body.password, exitstingUser.password);
      if (compare) {

        const token = await Jwt.sign({
          id: exitstingUser.id,
          email: exitstingUser.email
        }, c.env.JWT_PASSWORD);

        return c.json({token,msg:"ok"})
      }
      else{
        return c.text("Incorrect Password")
      }
    }
    else{
      return c.text("User not found")
    }
  }
  catch(e){
    console.log(e);
    return c.text("Email Not found")
  }

})

