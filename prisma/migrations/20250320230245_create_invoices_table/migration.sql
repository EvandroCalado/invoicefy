-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('PAID', 'PENDING', 'CANCELLED');

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "invoiceNumber" INTEGER NOT NULL,
    "invoiceName" TEXT NOT NULL,
    "invoiceDescription" TEXT NOT NULL,
    "invoiceQuantity" INTEGER NOT NULL,
    "invoiceRate" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "status" "InvoiceStatus" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "dueDate" INTEGER NOT NULL,
    "fromName" TEXT NOT NULL,
    "fromEmail" TEXT NOT NULL,
    "fromAddress" TEXT NOT NULL,
    "toName" TEXT NOT NULL,
    "toEmail" TEXT NOT NULL,
    "toAddress" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
