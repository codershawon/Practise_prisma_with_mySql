import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const update = async () => {


  const findFirst = await prisma.post.findFirstOrThrow({
    where: { 
        id: 4
     }
  })
    console.log({findFirst})
}
update()