import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const create = async () => {
    const result = await prisma.post.createMany({
        data:[
            {
                title: 'Prisma makes databases easy',
                content: 'You can interact with the database using Prisma from your preferred programming language. Prisma provides type safety and autocompletion for your database queries.',
                authorName: 'Alice',
            },
            {
                title: 'Prisma makes databases easy',
                content: 'You can interact with the database using Prisma from your preferred programming language. Prisma provides type safety and autocompletion for your database queries.',
                authorName: 'Alice',
            },
            {
                title: 'Prisma makes databases easy',
                content: 'You can interact with the database using Prisma from your preferred programming language. Prisma provides type safety and autocompletion for your database queries.',
                authorName: 'Alice',
            }
        ]
   })
    console.log(result)
}
create()