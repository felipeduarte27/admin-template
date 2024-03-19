/*
  Warnings:

  - Added the required column `acronym` to the `States` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "States" ADD COLUMN     "acronym" TEXT NOT NULL;
