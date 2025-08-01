-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "produto" TEXT NOT NULL,
    "cartao" TEXT NOT NULL,
    "dia" TEXT NOT NULL,
    "mes" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);
