import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const deleteData = async () => {
    const deleteData = await prisma.post.delete({
        where: { 
            id: 4
         }
    })
        console.log({deleteData})
}

deleteData()