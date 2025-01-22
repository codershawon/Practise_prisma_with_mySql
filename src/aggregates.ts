import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const aggregates=async()=>{
    //aggregates
    const aggregations = await prisma.user.aggregate({
        _avg: {
          age: true,
        },
      })
      
      console.log('Average age:' + aggregations._avg.age)


      //find sum of age
      const sum = await prisma.user.aggregate({
        _sum: {
          age: true,
        },
      })
      console.log(sum)
      //find count
      const count = await prisma.user.aggregate({
        _count: {
          age: true,
        },
      })
      const countData =await prisma.user.count()
      console.log(countData)
}
aggregates()