-- CreateEnum
CREATE TYPE "DeparturiesStatus" AS ENUM ('STARTED', 'FINISHED');

-- CreateEnum
CREATE TYPE "EntriesStatus" AS ENUM ('LOCAL', 'TRANSIT');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('PENDING', 'ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "status" "UserStatus" NOT NULL DEFAULT 'PENDING',
    "roleId" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Persons" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT,
    "tel" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Persons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Centers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Centers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stocks" (
    "id" TEXT NOT NULL,
    "centerId" TEXT NOT NULL,
    "qtd" DECIMAL(65,30) NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "Stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entries" (
    "id" TEXT NOT NULL,
    "transportation" TEXT,
    "arrivalDate" TIMESTAMP(3),
    "departureDate" TIMESTAMP(3),
    "container" TEXT,
    "invoice" TEXT,
    "damage" TEXT,
    "qtd" DECIMAL(65,30),
    "status" "EntriesStatus",

    CONSTRAINT "Entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Departuries" (
    "id" TEXT NOT NULL,
    "departureDate" TIMESTAMP(3),
    "invoice" TEXT,
    "client" TEXT,
    "value" DECIMAL(65,30),
    "total" DECIMAL(65,30),
    "qtd" DECIMAL(65,30),
    "status" "DeparturiesStatus",

    CONSTRAINT "Departuries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "users_roleId_foreign" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Persons" ADD CONSTRAINT "persons_userId_foreign" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Stocks" ADD CONSTRAINT "stock_centerId_foreign" FOREIGN KEY ("centerId") REFERENCES "Centers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Stocks" ADD CONSTRAINT "stockk_productId_foreign" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
