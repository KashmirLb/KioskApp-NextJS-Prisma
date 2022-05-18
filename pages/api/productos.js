import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {

  
  const productos = await prisma.producto.findMany()

  res.status(200).json(productos)
  
}