import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const update = async () => {


  const findFirst = await prisma.post.update({
    where: { 
        id: 4
     },
     data: { published: true },
  })
    console.log({findFirst})
}
update()