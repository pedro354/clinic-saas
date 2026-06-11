import { ScheduleAvailability } from "../../generated/prisma/client"

export interface ScheduleAvailabilityWhereParams {
    date?: {
        gte: Date
        lte: Date
    }
    userId?: number
    isAvailable: boolean
}

export interface FindScheduleAvailabilityParams {
    where?: ScheduleAvailabilityWhereParams
    include?: {
        user?: boolean
    }
}
export interface CreateScheduleAvailability{
    date: Date
    isAvailable: boolean
    userId: number
}
export interface ScheduleAvailabilityRepository {
    find: (params: FindScheduleAvailabilityParams) =>Promise<ScheduleAvailability[]>
    findById: (id: number) => Promise<ScheduleAvailability | null>
    create: (attributes: CreateScheduleAvailability) => Promise<ScheduleAvailability>
    update: (id: number, attributes: Partial<CreateScheduleAvailability>) => Promise<ScheduleAvailability | null>
}