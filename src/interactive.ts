import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const interactiveTransaction= async()=>{
    const result = await prisma.$transaction(async(trx)=>{
        //query 1
        const getAllUser= await trx.post.findMany({
            where:{
                published: true
            }
        })
        //query 2
        const count= await trx.user.count();
        //query 3
        const updateUser= await trx.user.update({
            where:{
                id: 80
            },
            data:{
                age: 26
            }
        })
        return {getAllUser, count, updateUser}
    })
    console.log(result)
}
interactiveTransaction()