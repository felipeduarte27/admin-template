/*
  Warnings:

  - Added the required column `productId` to the `Departuries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `Entries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Departuries" ADD COLUMN     "productId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Entries" ADD COLUMN     "productId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Entries" ADD CONSTRAINT "entries_productId_foreign" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Departuries" ADD CONSTRAINT "departuries_productId_foreign" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
