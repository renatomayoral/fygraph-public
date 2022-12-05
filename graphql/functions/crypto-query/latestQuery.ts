import { GraphQLContext } from './../../../src/context'
import {applyTakeConstraints} from '../error/applyTakeConstraints'
import { Prisma } from '@prisma/client'


const cLatestQuery = async (
    parent: any,
    args: {
        code?: string,
        offset?: number,
        limit?: number 
        orderBy?: {
          rank?: Prisma.SortOrder
          marketCap?: Prisma.SortOrder
          volume?: Prisma.SortOrder
          rate?: Prisma.SortOrder
          }

        },
    context: GraphQLContext
  ) => {
    const where = args.code
      ? {
          OR: [
            { code: { equals: args.code } },
            { name: { equals: args.code } },
            
            ],
        }
      : {}


    const take = applyTakeConstraints({
      min: 1,
      max: 120,
      value: args.limit ?? 5,
    })

    return context.prisma.cryptoLatest.findMany({
      where,
      skip: args?.offset,
      take,
      orderBy: args?.orderBy

    })
  }
export default cLatestQuery