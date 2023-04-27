import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const newUser = {
  name: 'alice',
  email: 'alice@prisma.io'
}


async function main() {
  // create a user (C)
//  const result = await prisma.user.create({
//    data: {
//      name: 'alice',
//      email: 'alice@prisma.io'
//    }
//  })

  // create a user (C)
//  const result = await prisma.user.create({ 
//    data: {
//      name: 'joe',
//      email: 'joe@prisma.io',
//      posts: {
//        create: [
//          {
//           title: 'hello world'
//          },
//          {
//             title: 'welcome!',
//          }
//        ]
//     }
//   }
// })


  // create multiple users (C)
  // not supported in sqlite
//  await prisma.user.createMany({
//    data: [
//      { name: 'fname', email: 'fname@email.com' },
//      { name: 'sname', email: 'sname@email.com' },
//      { name: 'tname', email: 'tname@email.com' }
//    ]
//  })  

  //  fetch all users(R)
  const result = await prisma.user.findMany({
      include: {
        posts: true
      }
  })
  // 
//  const result = await prisma.user.findUnique({
//    where: {
//      id: 3
//    }
//  })
  //
//  const result = await prisma.user.findFirst({
//    where: {
//      email: 'alice@prisma.io'
//    }
//  })

  console.dir(result, { depth: null });  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
