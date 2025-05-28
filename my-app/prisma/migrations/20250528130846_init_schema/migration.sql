-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habits" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "allhabits" TEXT NOT NULL,
    "currethabit" TEXT NOT NULL,

    CONSTRAINT "Habits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Habits" ADD CONSTRAINT "Habits_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
