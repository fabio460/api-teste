import { Router } from "express";
import { atualizar, criar, deletar, listar } from "../controllers/produtosController";
// import { atualizar, criar, deletar, listar } from "../controllers/produtosControllers";

const produtosRouter = Router()

produtosRouter.get("/listar", listar)
produtosRouter.post("/adicionar",criar)
produtosRouter.put("/atualizar", atualizar)
produtosRouter.delete("/deletar", deletar)

export default produtosRouter