-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collections" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apirequests" (
    "id" SERIAL NOT NULL,
    "collectionId" INTEGER NOT NULL,
    "method" TEXT NOT NULL,
    "queryparams" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "request" TEXT NOT NULL,
    "response" TEXT NOT NULL,

    CONSTRAINT "Apirequests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_password_key" ON "Users"("password");

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collections" ADD CONSTRAINT "Collections_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apirequests" ADD CONSTRAINT "Apirequests_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
