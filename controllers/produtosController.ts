import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient()

export const listar = async(req:Request, res:Response)=>{
    try {
       const r = await prisma.produtos.findMany()
       res.json(r)
    
   } catch (error) {
    res.send(error)
   }
}

export const criar = async(req:Request, res:Response)=>{
    const {valor,imagem,nome} = req.body
    try {
        await prisma.produtos.create({
            data:{
                nome, imagem, valor
            }
        })
        res.status(200).send("produto adicionado com sucesso!")
    } catch (error) {
        res.status(500).send(error)
    }
}

export const atualizar = async(req:Request, res:Response)=>{
    const {id,valor,imagem,nome} = req.body
    try {
        await prisma.produtos.update({
            data:{
                imagem, nome, valor
            },
            where:{id}
        })
        res.status(200).send("produto alterado com sucesso!!!")
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deletar = async(req:Request, res:Response)=>{
    const {id} = req.body
    try {
        await prisma.produtos.delete({
            where:{
                id
            }
        })
        res.status(200).send("produto deletado")
    } catch (error) {
        res.status(500).send(error)
    }
}




