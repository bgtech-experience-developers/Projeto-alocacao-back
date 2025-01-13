import { PrismaClient } from '@prisma/client';
import {InstanciaPrismas}  from './connection/InstanciaPrisma.js';
import {faker} from '@faker-js/faker';

const prisma: PrismaClient = InstanciaPrismas.createConnection();

async function seedColaborators() {
  const records = [];

  for (let i = 1; i <= 100; i++) {
    records.push(
      prisma.colaborator.create({
        data: {
          cpf: faker.string.numeric(11),
          pis: faker.string.numeric(11),
          rg: faker.string.numeric(9),
          name: faker.person.fullName(),
          phone1: faker.phone.number({style: 'national'}),
          cell_phone1: faker.phone.number({style: 'national'}),
          phone2: faker.phone.number({style: 'national'}),
          cell_phone2: faker.phone.number({style: 'national'}),
          cod_bank: faker.string.numeric(4),
          type: faker.helpers.arrayElement(['CLT', 'PJ']),
          sex: faker.number.int({ min: 0, max: 1 }),
          education: faker.number.int({ min: 1, max: 5 }),
          agency: faker.string.numeric(6),
          account: faker.string.numeric(10),
          type_account: faker.number.int({ min: 1, max: 3 }),
          email: faker.internet.email(),
          variation: faker.number.int({ min: 0, max: 100 }),
          status: faker.datatype.boolean(),
          experience1: faker.person.jobArea(),
          experience2: faker.person.jobArea(),
          experience3: faker.person.jobArea(),
          location_proof: faker.location.street(),
          colaborator_external: {
            create: {
              work: faker.string.alpha(3),
              type: faker.person.jobType(),
              organ: faker.number.int({ min: 1, max: 999 }),
              renova: faker.number.int({ min: 1, max: 10 }),
              registration: faker.string.numeric(10),
              sector: faker.person.jobArea(),
              position: faker.person.jobTitle(),
              colaborator_external_address: {
                create: {
                  address: {
                    create: {
                      cep: faker.location.zipCode('########'),
                      street: faker.location.street(),
                      complement: faker.location.secondaryAddress(),
                      neighborhood: faker.location.county(),
                      created_at: faker.date.past(),
                      updated_at: faker.date.recent(),
                    },
                  },
                },
              },
            },
          },
        },
      })
    );
  }

  await prisma.$transaction(records);
  console.log('100 registros criados com sucesso! para colaboradores');
}

seedColaborators()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
