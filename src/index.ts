import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const main = async () => {
    const result = await prisma.post.create({
        data:{
            title: 'Prisma makes databases easy',
            content: 'You can interact with the database using Prisma from your preferred programming language. Prisma provides type safety and autocompletion for your database queries.',
            authorName: 'Alice',
        }
   })
    console.log(result)

  const getAllDataFromDB = await prisma.post.findMany();
    console.log(getAllDataFromDB)
}
main()