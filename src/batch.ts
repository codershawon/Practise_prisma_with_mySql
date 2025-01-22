import { PrismaClient } from "@prisma/client";  
const prisma = new PrismaClient();

const batch= async()=>{
    const createUser= prisma.user.create({
        data:{
            name:"mike",
            email:"mike@gmail.com",
        }
    });
    const updateUser = prisma.user.update({
        where:{
            id: 7
        },
        data:{
            age: 30
        }
    });
    const[createdUser, updatedUser]= await prisma.$transaction([
        createUser,
        updateUser
    ])
    console.log(createdUser, updatedUser)
}
batch()