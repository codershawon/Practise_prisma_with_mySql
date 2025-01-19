import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const relationalQueries= async()=>{
   /* fluent api */

    // const result = await prisma.user.findUnique({
    //     where: { id: 3 },
    // }).Post()
    // console.log(result)


    /* Relational filters */
    const result = await prisma.user.findMany({
        include:{
            Post:{
                where:{
                    published:true
                }
            }
        }   
    })
    console.dir(result,{depth: Infinity})
}
relationalQueries()