/*
  Warnings:

  - Added the required column `lede` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagline` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xml` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "lede" VARCHAR(200) NOT NULL,
ADD COLUMN     "tagline" CHAR(10) NOT NULL,
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "xml" XML NOT NULL;
