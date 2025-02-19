import { PrismaClient } from "@prisma/client";
import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
import { SchoolSchema, schoolSchema } from "../validations/SchoolSchema.js";

export class SchoolRepository {
  static getSchoolByCnpj(cnpj: string) {
    throw new Error("Method not implemented.");
  }
  private static connection: PrismaClient = InstanciaPrismas.createConnection();

  async getSchoolByCnpj(cnpj: string) {
    try {
      return await SchoolRepository.connection.school.findFirst({ where: { cnpj } });
    } catch (error) {
      throw error;
    }
  }

  async setSchool(schoolBody: schoolSchema) {
    try {
      const register = await SchoolRepository.connection.$transaction(async (tsx) => {
        const addressRegister = await tsx.address.create({
          data: {
            cep: schoolBody.cep,
            city: schoolBody.city,
            neighborhood: schoolBody.neighborhood,
            number: schoolBody.number,
            state: schoolBody.state,
            street: schoolBody.street,
          },
        });
        const schoolRegister = await tsx.school.create({
          data: {
            cnpj: schoolBody.cnpj,
            answerable_email: schoolBody.answerable_email,
            answerable_school: schoolBody.answerable_school,
            answerable_phone: schoolBody.answerable_phone,
            name_school: schoolBody.name_school,
            class_room: {
              create: schoolBody.room.map((bodyRoom) => {
                return bodyRoom;
              }),
            },
          },
        });
        await tsx.school_address.create({
          data: {
            id_address: addressRegister.id,
            id_school: schoolRegister.id,
          },
        });
        return "escola cadastrada com sucesso";
      });
      return register;
    } catch (error) {
      throw error;
    }
  }

  static async getAll(limit: number, offset: number) {
    try {
      const [school, class_room, school_address] =  await SchoolRepository.connection.$transaction(
        [
           SchoolRepository.connection.school.findMany({
            select: {
              cnpj: true,
              answerable_school: true
            }
          }),
           SchoolRepository.connection.class_room.findMany({
            select: {
              amount_chair: true
            }
          }),
          SchoolRepository.connection.address.findMany({
            select: {
              street: true
            }
          })

        ]
      )
      console.log(school);
      console.log(class_room);
      console.log(school_address);
      
      
      
    } catch(error) {
      throw error;
    }
  }
}
