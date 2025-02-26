import { PrismaClient } from "@prisma/client";
import { InstanciaPrismas } from "../connection/InstanciaPrisma.js";
import { SchoolSchema, schoolSchema } from "../validations/SchoolSchema.js";
import { SafeError } from "../error/CollaboratorError.js";

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
      const schoolAll =  await SchoolRepository.connection.school.findMany({
            take: limit,
            skip: offset,
            select: {
              id: true,
              cnpj: true,
              answerable_school: true,
              class_room: {
                select: {
                  amount_chair: true,
                }
              },
              school_address: {
                select: {
                  address: {
                    select: {
                      street: true
                    }
                  }
                }
              }
            }
          })

      return schoolAll;
    } catch(error) {
      throw error;
    }
  }

  static async getByID(id: number) {
    try {
      return this.connection.school.findFirst({
        where: {
          id
        }
      })
    } catch(error) {
      throw error;
    }
  }

  static async update(id:number, school: UpdateSchool) {
    try {
      return await this.connection.school.update({
        where: {
          id
        },
        data: {
          name_school: school.name_school,
          cnpj: school.cnpj,
          answerable_school: school.answerable_school,
          answerable_email: school.answerable_email,
          answerable_phone: school.answerable_phone,
          school_address: {
            create: {
              address: {
                create: {
                  number: school.number,
                  street: school.street,
                  cep: school.cep,
                  neighborhood: school.neighborhood,
                  state: school.state,
                  city: school.city,

                }
              }
            }
          }
        }
      })
    } catch (error) {
        throw error
    }
  }
}
