import { NextRequest } from "next/server"
import { prisma } from "@/database"

export async function POST(request: NextRequest) {
  const body = await request.json()

  const text = body.text as string
  const question_id = body.question as string


  // TODO: Get User From Session
  const creator_id = "cd9ab67c-93fb-4d02-8755-0f7c971dfc2c"

  if (question_id) {
    const answer = await prisma.answer.create({
      data: {
        text,
        creator_id,
        question_id,
      }
    })
    if (!answer) {
      return Response.json({ error: "Failed To Create Answer" })
    }
    return Response.json(answer)
  } else {

    if (!text) {
      return Response.json({ error: "Missing Required Fields" })
    }

    const question = await prisma.question.create({
      data: {
        text,
        creator_id,
      }
    })

    if (!question) {
      return Response.json({ error: "Failed To Create Auction" })
    }

    return Response.json(question)
  }
}

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const id = params.get("id")

  if (id) {
    // Fetch Single Auction Object
    const auction = await prisma.question.findUnique({ where: { id } })
    if (!auction) {
      return Response.json({ error: "Question Not Found" })
    }
    return Response.json(auction)
  } else {
    // Fetch List Of Auction
    const page = params.get("page") || 1
    const query = params.get("query") || ''
    const sorting = params.get("sort") || ''

    const take = 10
    const skip = (Math.max(+page, 1) - 1) * take
    const total = await prisma.question.count({
      where: {
        text: {
          contains: query,
          mode: "insensitive",
        }
      }
    })
    const count = Math.ceil(total / take)

    const auctions = await prisma.question.findMany({
      where: {
        text: {
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