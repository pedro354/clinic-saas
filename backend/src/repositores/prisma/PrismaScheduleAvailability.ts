import { Prisma, ScheduleAvailability } from "../../../generated/prisma/client";
import { prisma } from "../../../prisma/lib/prisma";
import { CreateScheduleAvailability, FindScheduleAvailabilityParams, ScheduleAvailabilityRepository } from "../ScheduleAvailabilityRepository";

export class PrismaScheduleAvailability implements ScheduleAvailabilityRepository {
    async find(params: FindScheduleAvailabilityParams): Promise<ScheduleAvailability[]>{
        const where: Prisma.ScheduleAvailabilityWhereInput = {
            date: {
                gte: params.where?.date?.gte,
                lte: params.where?.date?.lte,
            },
            userId: params.where?.userId,
            isAvailable: params.where?.isAvailable
        }
        return prisma.scheduleAvailability.findMany({
            where,
            include: {
                user: params.include?.user
            }
        })
    }
    async findById(id:number): Promise<ScheduleAvailability | null>{
        return prisma.scheduleAvailability.findUnique({
            where: {id},
            include: {
                user: true
            }
        })
    }
    async create(attributes: CreateScheduleAvailability): Promise <ScheduleAvailability> {
        return prisma.scheduleAvailability.create({data: attributes})
    }
   async update(id: number, attributes: Partial<CreateScheduleAvailability>): Promise<ScheduleAvailability>{
    return prisma.scheduleAvailability.update({
        where: {id},
        data: attributes
    })
   }
       async delete(id: number): Promise<ScheduleAvailability>{
        return prisma.scheduleAvailability.delete({where: { id }})
    }

}