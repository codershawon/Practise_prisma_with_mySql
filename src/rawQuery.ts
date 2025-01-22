// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const rawQuery=async()=>{
// //    const posts= await prisma.$queryRaw`SELECT * FROM posts Where published = true`;
// //    console.log(posts)

// await prisma.$queryRaw`TRUNCATE TABLE \`users\``;
// }
// rawQuery()

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
    try {
        // Disable foreign key checks
        await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0`;

        // Truncate the users table
        await prisma.$executeRaw`TRUNCATE TABLE \`users\``;

        // Re-enable foreign key checks
        await prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1`;

        console.log("Table truncated successfully.");
    } catch (error) {
        console.error("Error while truncating table:", error);
    } finally {
        await prisma.$disconnect();
    }
};

rawQuery();


