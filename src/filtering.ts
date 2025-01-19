import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering= async()=>{
    // const andFilterData = await prisma.post.findMany({
    //     where:{
    //         AND:[
    //             {title:{
    //                 contains: "Post 1"
    //             }},
    //             {published: true}
    //         ]
    //     }
    // })
    // console.dir(andFilterData,{depth: Infinity})
    // const orFilterData = await prisma.post.findMany({
    //     where:{
    //         OR:[
    //             {title:{
    //                 contains: "Post 1"
    //             }},
    //             {published: true}
    //         ]
    //     }
    // })
    // console.dir(orFilterData,{depth: Infinity})

    // const startsWithFilterData = await prisma.user.findMany({
    //     where:{
    //         email:{
    //             startsWith: "user1"
    //         }
    //     }
    // })
    // console.dir(startsWithFilterData,{depth: Infinity})

    // const userNameArray =["user 1", "user2", "user3"]
    // const userNamesByArray= await prisma.user.findMany({
    //     where:{
    //         name:{
    //             in: userNameArray
    //         }
    //     }
    // })
    // console.log(userNamesByArray)

    const inDepthData= await prisma.user.findUnique({
        where:{
            id: 1
        },
        include:{
            Post: {
                include: {
                    postCategory: {
                        include:{
                            category: true
                        }
                    }
                }
            }
        }
    })
    console.dir(inDepthData,{depth: Infinity})
}

filtering()