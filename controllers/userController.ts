import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient()

export const listar = async(req:Request, res:Response)=>{
//     try {
//        const r = await prisma.user.findMany()
//        res.json(r)
    
//    } catch (error) {
//     res.send(error)
//    }
res.send("fabio")
}


export const criar = async(req:Request, res:Response)=>{
    const {email,senha,nome} = req.body
    try {
        await prisma.user.create({
            data:{
                email, nome, senha
            }
        })
        res.status(200).send("usuadio adicionado com sucesso!")
    } catch (error) {
        res.status(500).send(error)
    }
}

export const atualizar = async(req:Request, res:Response)=>{
    const {id,email,senha,nome} = req.body
    try {
        await prisma.user.update({
            data:{
                email, nome, senha
            },
            where:{id}
        })
        res.status(200).send("usuario alterado com sucesso!!!")
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deletar = async(req:Request, res:Response)=>{
    const {id} = req.body
    try {
        await prisma.user.delete({
            where:{
                id
            }
        })
        res.status(200).send("usuario deletado")
    } catch (error) {
        res.status(500).send(error)
    }
}




