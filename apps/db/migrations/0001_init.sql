CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "comment" TEXT NOT NULL
);

CREATE UNIQUE INDEX "User_name_key" ON "User"("name");