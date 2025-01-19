import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'stdout',
          level: 'error',
        },
        {
          emit: 'stdout',
          level: 'info',
        },
    ]
});
prisma.$on('query', (event) => {
    console.log(`Query: ${event.query}`);
    console.log(`Duration: ${event.duration}ms`);
  });
  const main = async () => {
      const getAllDataFromDB = await prisma.post.findMany();
  }
  main()