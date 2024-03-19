/*
  Warnings:

  - Added the required column `cityId` to the `Persons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateId` to the `Persons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Persons" ADD COLUMN     "cityId" TEXT NOT NULL,
ADD COLUMN     "stateId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "States" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "States_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cities" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "stateId" TEXT NOT NULL,

    CONSTRAINT "Cities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Persons" ADD CONSTRAINT "state_stateId_foreign" FOREIGN KEY ("stateId") REFERENCES "States"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Persons" ADD CONSTRAINT "city_cityId_foreign" FOREIGN KEY ("stateId") REFERENCES "Cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Cities" ADD CONSTRAINT "state_stateId_foreign" FOREIGN KEY ("stateId") REFERENCES "States"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
