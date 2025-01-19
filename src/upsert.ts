import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const upsertData= async()=>{
    const data = await prisma.post.upsert({
      where: { id: 22 },
      update: {
        title: "Updated",
        content: "This is an updated post",
        authorName: "Boby",
      },
      create: {
        title: "Updated Post",
        content: "This is an updated post",
        authorName: "Bob",
      },
    });
    console.log(data);
};
upsertData();