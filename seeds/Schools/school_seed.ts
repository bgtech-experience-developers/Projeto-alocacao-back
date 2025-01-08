import {faker} from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  for(let i = 0; i <= 5; i++) {
    await prisma.school.create({
      data: {
        name_school: faker.person.fullName(),
        cnpj: '12.345.678/0001-90',
        manager: faker.person.fullName(),
        manager_email: faker.internet.email(),
        phone: faker.phone.number(),
        address: {
          create: {
            cep: faker.address.zipCode(),
            street: faker.address.street(),
            neighborhood:faker.address.city(),
            state: faker.address.state(),
            city: faker.address.city(),
          },
        },
        rooms: {
          create: [
            {
              floor: `${faker.number.int()} andar`,
              identificator: `${faker.number.int()}`,
              ceps: `${faker.number.int({min: 1, max: 2})}`,
              chair_qtd: faker.number.int({min: 1, max: 2}),
              chair_type: faker.word.words(),
            },
            {
              floor: `${faker.number.int()} andar`,
              identificator: `${faker.number.int()}`,
              ceps: `${faker.number.int({min: 1, max: 2})}`,
              chair_qtd: faker.number.int({min: 1, max: 1}),
              chair_type: faker.word.words(),
            },
          ],
        },
      },
    })
  }

  console.log('Seed inserido com sucesso');
}

async function getSchool() {
  const school = await prisma.school.findMany({
    include: {
      address: true,
      rooms: true,
    }
  })

  console.log(JSON.stringify(school, null, 2));
}

async function deleteSchools() {
  await prisma.$transaction([
    prisma.room.deleteMany(),
    prisma.address.deleteMany(),
    prisma.school.deleteMany()
  ])
  console.log('deletados com sucesso');
}

// main()
//   .catch((e) => {
//     console.log(e);
//     process.exit(1)
//   })
  
getSchool()
  .catch(e => {
    console.log(e);
    process.exit(1)
  })

// deleteSchools()
// .catch(e => {
//   console.log(e);
//   process.exit(1)
// })