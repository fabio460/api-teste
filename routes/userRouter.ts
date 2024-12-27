import { Router } from "express";
import { atualizar, criar, deletar, listar } from "../controllers/userController";

const userRouter = Router()

userRouter.get("/listar", listar)
userRouter.post("/adicionar",criar)
userRouter.put("/atualizar", atualizar)
userRouter.delete("/deletar", deletar)

export default userRouter