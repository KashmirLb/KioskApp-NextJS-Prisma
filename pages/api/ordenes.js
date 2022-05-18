import { PrismaClient } from "@prisma/client"



export default async function handler(req, res) {
    
    const prisma = new PrismaClient()

    if(req.method === "POST"){

        const orden = await prisma.orden.create({
            data: {
                nombre: req.body.nombre,
                total: req.body.total,
                pedido: req.body.pedido,
                fecha: req.body.fecha
            }
        })
        
        res.json(orden)
    }

    if(req.method === "GET"){
        const ordenes = await prisma.orden.findMany()

        res.status(200).json(ordenes)
    }
}