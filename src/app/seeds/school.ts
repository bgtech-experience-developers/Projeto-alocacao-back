import {faker} from '@faker-js/faker';
import { InstanciaPrismas } from '../connection/InstanciaPrisma';

const connectionDb = InstanciaPrismas.createConnection();
async function schoolSeeds() {
    let dados = []
    let pcd = 0
    for(let i = 0; i <= 100; i++) {
        dados.push(
            await connectionDb.school.create({
                data: {
                    name_school: faker.company.name(),
                    cnpj: (faker.commerce.isbn({variant: 13, separator: ' '}) + i).toString(),
                    answerable_school: faker.person.firstName() + " " + faker.person.lastName(),
                    answerable_email: faker.internet.email(),
                    answerable_phone: faker.phone.number({
                        style: 'national'
                    }),
                    class_room: {
                        create: {
                            floor: i.toString(),
                            number_class: faker.airline.flightNumber(),
                            amount_chair: faker.airline.flightNumber({length: 2}),
                            type_chair: i == pcd ? "PCD" : "Comum",
                        }
                    },
                    school_address: {
                        create: {
                            address: {
                                create: {
                                    number: faker.location.buildingNumber(),
                                    street: faker.location.street(),
                                    cep: faker.location.zipCode(),
                                    neighborhood: faker.animal.petName(),
                                    city: faker.location.city(),
                                    state: faker.location.state()
                                }
                            }
                        }
                    }

                }
            })
        )
    } 
}

await schoolSeeds()
.then(() => {
    console.log('Dados de Escolas inseridos com sucesso!');
})
.catch((error) => console.log("Deu erro" + error));
