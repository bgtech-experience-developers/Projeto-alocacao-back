import { PrismaClient } from '@prisma/client';
const connection = new PrismaClient();
export class SchoolRepository {
    async getAll() {
        try {
            const schools = await connection.school.findMany({
                include: {
                    address: true,
                    rooms: true
                }
            });
            return schools;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getUnique(id) {
        return await connection.school.findUnique({
            where: {
                id: id
            },
            include: {
                address: true,
                rooms: true
            }
        });
    }
    async createSchool(body) {
        try {
            await connection.school.create({
                data: {
                    name_school: body.name_school,
                    cnpj: body.cnpj,
                    manager: body.manager,
                    manager_email: body.manager_email,
                    phone: body.phone,
                    address: {
                        create: {
                            cep: body.address.cep,
                            street: body.address.street,
                            neighborhood: body.address.neighborhood,
                            state: body.address.state,
                            city: body.address.city,
                            complement: body.address.complement
                        }
                    },
                    rooms: {
                        create: body.rooms.map((room) => ({
                            floor: room.floor,
                            identificator: room.identificator,
                            cespe: room.cespe,
                            chair_qtd: room.chair_qtd,
                            chair_type: room.chair_type,
                        }))
                    }
                }
            });
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteSchool(id) {
        return await connection.$transaction(async (prisma) => {
            await prisma.room.deleteMany({
                where: {
                    schoolId: id
                }
            });
            await prisma.schoolAddress.delete({
                where: {
                    schoolId: id
                }
            });
            const deleted = await prisma.school.delete({
                where: {
                    id: id
                }
            });
            return deleted;
        });
    }
}
//# sourceMappingURL=SchoolRepository.js.map