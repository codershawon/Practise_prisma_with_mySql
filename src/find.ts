import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const find = async () => {

//   const getAllDataFromDB = await prisma.post.findMany();

  const findFirst = await prisma.post.findFirst({
    where: { 
        id: 4
     }
  })
    console.log({findFirst})
}
find()