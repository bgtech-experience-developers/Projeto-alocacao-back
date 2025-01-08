import {faker} from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  for(let i = 0; i <= 4; i++) {
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
              identificator: `${faker.number.romanNumeral}`,
              ceps: `${faker.number.int({min: 10, max: 10})}`,
              chair_qtd: faker.number.int({min: 10, max: 100}),
              chair_type: faker.word.words(),
            },
            {
              floor: `${faker.number.int()} andar`,
              identificator: `${faker.number.romanNumeral}`,
              ceps: `${faker.number.int({min: 10, max: 10})}`,
              chair_qtd: faker.number.int({min: 10, max: 100}),
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

// main()
//   .catch((e) => {
//     console.log(e);
//     process.exit(1)
//   })
  
// getSchool()
//   .catch(e => {
//     console.log(e);
//     process.exit(1)
//   })