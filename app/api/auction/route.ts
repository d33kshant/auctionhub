import { NextRequest } from "next/server"
import { prisma } from "@/database"

export async function POST(request: NextRequest) {
  const body = await request.json()

  const title = body.title as string
  const description = body.description as string
  const price = body.price as number

  if (!title || !description || !price) {
    return Response.json({ error: "Missing Required Fields" })
  }

  // TODO: Get User From Session
  const creator = "cd9ab67c-93fb-4d02-8755-0f7c971dfc2c"

  const auction = await prisma.auction.create({
    data: {
      title,
      description,
      price,
      creator_id: creator,
    }
  })

  if (!auction) {
    return Response.json({ error: "Failed To Create Auction" })
  }

  return Response.json(auction)
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const id = params.get("id")

  if (id) {
    // Fetch Single Auction Object
    const auction = await prisma.auction.findUnique({ where: { id } })
    if (!auction) {
      return Response.json({ error: "Auction Not Found" })
    }
    return Response.json(auction)
  } else {
    // Fetch List Of Auction
    const page = params.get("page") || 1
    const query = params.get("query") || ''
    const sorting = params.get("sort") || ''

    const take = 10
    const skip = (Math.max(+page, 1) - 1) * take
    const total = await prisma.auction.count({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        }
      }
    })
    const count = Math.ceil(total / take)

    const auctions = await prisma.auction.findMany({
      where: {
        title: {
          contains: query,
          mode: "insensitive",
        }
      },
      skip,
      take,
    })

    return Response.json({ auctions, match_count: total, page_count: count, current_page: +page })
  }
}