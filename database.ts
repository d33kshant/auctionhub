import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: undefined | PrismaClient
}

export const prisma = globalThis.prisma ?? new PrismaClient()