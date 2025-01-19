import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => { 
    //offset pagination
    const paginationSorting = await prisma.post.findMany({
        skip: 6,
        take: 10
    })
    // console.log(paginationSorting)

    //cursor pagination
    const cursorPagination = await prisma.post.findMany({
        cursor: { id: 10 },
        take: 10,
        skip: 1,
        orderBy: { title: 'desc' }
    })
    console.log(cursorPagination)
}
paginationSorting()