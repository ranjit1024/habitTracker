import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Jwt } from "hono/utils/jwt";
import bcrypt from "bcryptjs";

export const userrouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_PASSWORD : string
  };
}>();

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
    const token = Jwt.sign({
      id:createuser.id,
      email:createuser.email
    },c.env.JWT_PASSWORD);

    console.log(createuser)
    return c.json(token);
  }
});
