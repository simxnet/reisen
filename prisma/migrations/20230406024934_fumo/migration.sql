-- CreateTable
CREATE TABLE "Fumo" (
    "id" SERIAL NOT NULL,
    "source" TEXT NOT NULL,
    "caption" TEXT DEFAULT 'fumofu?',

    CONSTRAINT "Fumo_pkey" PRIMARY KEY ("id")
);
