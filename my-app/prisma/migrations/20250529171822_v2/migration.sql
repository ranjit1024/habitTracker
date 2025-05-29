/*
  Warnings:

  - You are about to drop the column `allhabits` on the `Habits` table. All the data in the column will be lost.
  - You are about to drop the column `startdate` on the `Habits` table. All the data in the column will be lost.
  - Added the required column `created` to the `Habits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end` to the `Habits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Habits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habits" DROP COLUMN "allhabits",
DROP COLUMN "startdate",
ADD COLUMN     "created" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "followdate" TIMESTAMP(3)[],
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;
