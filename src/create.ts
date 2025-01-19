import { PrismaClient, UserRole } from '@prisma/client';
const prisma = new PrismaClient();

const create = async () => {
    // const createUser= await prisma.user.create({
    //     data:{
    //         name: "user 2",
    //         email: "user2@example.com",
    //         role: UserRole.user
    //     }
    // })
    // console.log({createUser})

    // const profile = await prisma.profile.create({
    //    data:{
    //      bio:"This is the profile",
    //      userId: 1,
    //    }
    // })

    // const createCategory= await prisma.category.create({
    //     data:{
    //         name: "software"
    //     }
    // })

    // const createPost = await prisma.post.create({
    //     data:{
    //         title: "Post 1",
    //         content: "This is the post",
    //         authorId: 1,
    //     }
    // })
    // console.log({createPost})
    const createPost = await prisma.post.create({
        data:{
            title: "Post 5",
            content: "This is the post 5",
            authorId: 3,
            postCategory: {
              create:[
                {
                 categoryId: 1
                },
                {
                 categoryId: 3
                },
              ]
            }
        },
        include:{
            postCategory: true
        }
    })
    console.log(createPost)
       
}
create()